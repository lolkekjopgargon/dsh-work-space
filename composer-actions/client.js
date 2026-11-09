window.__ModuleLoader__.load({
  id: 'dsh-composer-actions',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const CSS = `
.ws-composer-actions {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-inline: 2px;
}
.ws-composer-actions .ws-action {
  appearance: none;
  border: 1px solid var(--dsw-alias-border-l2, rgba(127, 127, 127, 0.24));
  background: transparent;
  color: var(--dsw-alias-label-secondary, #666);
  font: inherit;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  height: 22px;
  padding: 0 7px;
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 120ms ease, color 120ms ease, border-color 120ms ease;
}
.ws-composer-actions .ws-action:hover:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-hover, rgba(127, 127, 127, 0.1));
  color: var(--dsw-alias-label-primary, #111);
  border-color: var(--dsw-alias-border-l1, rgba(127, 127, 127, 0.42));
}
.ws-composer-actions .ws-action:active:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-active, rgba(127, 127, 127, 0.16));
}
.ws-composer-actions .ws-action:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary, #4d6bfe);
  outline-offset: 1px;
}
.ws-composer-actions .ws-action:disabled {
  opacity: 0.4;
  cursor: default;
}
`;

    // Текст, который появится в поле ввода нового чата (не отправляется сам).
    const NEW_TOPIC_DRAFT = [
      'Новая тема. Продолжаем работу над проектом.',
      'Прочитай правила проекта и файл задач,',
      'кратко скажи, на чём остановились, и жди задачу.',
    ].join(' ');

    function readJSON(key, fallback) {
      try {
        const raw = window.localStorage.getItem(key);
        const parsed = raw === null ? null : JSON.parse(raw);
        return parsed && typeof parsed === 'object' ? parsed : fallback;
      } catch {
        return fallback;
      }
    }

    /** Ищет код задачи, привязанной к этому чату: ссылки живут в памяти плагина задач. */
    function taskCodeForSession(sessionId) {
      if (typeof sessionId !== 'string' || sessionId === '') return '';
      const links = readJSON('workspace.links', {});
      const boards = readJSON('workspace.board', {});
      for (const [path, map] of Object.entries(links)) {
        if (!map || typeof map !== 'object') continue;
        for (const [taskId, session] of Object.entries(map)) {
          if (session !== sessionId) continue;
          const tasks = Array.isArray(boards[path]) ? boards[path] : [];
          const task = tasks.find((item) => item && item.id === taskId);
          if (task && typeof task.code === 'string' && task.code !== '') return task.code;
        }
      }
      return '';
    }

    function makeActions(startSession) {
      return function ComposerActions({ inputActions, sessionId }) {
        const disabled = inputActions === undefined;
        const send = (text) => {
          if (disabled) return;
          inputActions.setDraft(text);
          inputActions.submit();
        };
        return h('div', { className: 'ws-composer-actions' }, [
          h('button', {
            type: 'button',
            className: 'ws-action',
            title: 'Сохранить итог задачи в память проекта',
            disabled,
            onClick: () => send(
              'Собери итог этой сессии и предложи, что записать в долгую память проекта: список пунктов с галочками и файл для каждого (задачи, решения, грабли, баги). Ничего не записывай, пока я не выберу.',
            ),
          }, 'Memory'),
          h('button', {
            type: 'button',
            className: 'ws-action',
            title: 'Сжать контекст, не начиная новый чат',
            disabled,
            onClick: () => send('/compact'),
          }, 'Compact'),
          h('button', {
            type: 'button',
            className: 'ws-action',
            title: 'Новый чат с уже вписанным началом: прочитать память и вспомнить, где остановились',
            onClick: startSession,
          }, 'New'),
          h('button', {
            type: 'button',
            className: 'ws-action',
            title: 'Закоммитить текущую работу и обновить историю коммитов',
            disabled,
            onClick: () => {
              const code = taskCodeForSession(sessionId);
              const head = code === ''
                ? 'Сделай коммит по текущей задаче. Код задачи возьми из названия этого чата (первое слово до «—»).'
                : 'Сделай коммит по задаче ' + code + '.';
              send([
                head,
                'Проверь git status, не добавь лишнего.',
                'Сообщение коммита начинай с кода задачи: «' + (code || 'КОД') + ': что сделано».',
                'Затем обнови файл .workspace/commits.json: branch, ahead, behind, dirty, status (список изменённых файлов) и commits (sha, дата, автор, сообщение, ветка, файлы с +/−).',
                'Кратко скажи, что закоммитил.',
              ].join('\n'));
            },
          }, 'Commit'),
        ]);
      };
    }

    return {
      inject: ['slots', 'uiWorkspace'],
      apply(ctx) {
        ctx.effect(() => {
          const style = document.createElement('style');
          style.id = 'ws-composer-actions-style';
          style.textContent = CSS;
          document.head.append(style);
          return () => style.remove();
        }, 'composer-actions: styles');

        const startSession = () => {
          const workspace = ctx.get('uiWorkspace');
          if (!workspace || typeof workspace.startSession !== 'function') return;
          try {
            workspace.startSession(undefined, {
              prompt: NEW_TOPIC_DRAFT,
              whenDraftExists: 'append',
            });
          } catch (error) {
            console.warn('composer-actions: startSession with prompt failed', error);
            workspace.startSession();
          }
        };

        ctx.slots.inject('conversation.input.left', () => ctx.slots.register({
          name: 'conversation.input.left',
          id: 'ws-composer-actions',
          order: 50,
        }, makeActions(startSession)));
      },
    };
  },
});
