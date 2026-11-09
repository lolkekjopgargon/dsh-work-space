window.__ModuleLoader__.load({
  id: 'dsh-work-space',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    const useState = React.useState;
    const useEffect = React.useEffect;
    const useMemo = React.useMemo;
    const useRef = React.useRef;

    const PANEL_ID = 'tasks';
    const STATUS_KEY = 'workspace.status';
    const PROJECT_KEY = 'workspace.project';
    const LINKS_KEY = 'workspace.links';
    const MAIN_KEY = 'workspace.main';
    const BOARD_KEY = 'workspace.board';
    const DELETED_KEY = 'workspace.deleted';
    const COMMITS_KEY = 'workspace.commits';
    const TAB_KEY = 'workspace.tab';
    const COMMITS_META_KEY = 'workspace.commits.meta';
    const LANG_KEY = 'workspace.lang';
    const PACK_KEY = 'workspace.pack';

    const COLUMNS = [
      { id: 'todo', accent: '#8b949e', empty: 'emptyTodo' },
      { id: 'doing', accent: '#d29922', empty: 'emptyDoing' },
      { id: 'done', accent: '#2da44e', empty: 'emptyDone' },
      { id: 'archived', accent: '#6e7781', empty: 'emptyArchived' },
      { id: 'deleted', accent: '#b42318', empty: 'emptyDeleted' },
    ];

    const STRINGS = {
      ru: {
        title: 'Work Space',
        sub: 'Планирование работы: карточки, статусы, стена задачи и отдельный чат на каждую.',
        project: 'Проект',
        createProject: 'Создать проект',
        mainChat: 'Главный чат',
        createMainChat: 'Создать главный чат',
        pickMainChat: 'Выбрать главный чат',
        export: 'Экспорт',
        import: 'Импорт',
        language: 'Язык интерфейса',
        translate: 'Перевести на свой',
        todo: 'Бэклог',
        doing: 'В работе',
        done: 'Готово',
        archived: 'Архив',
        deleted: 'Удалённые',
        emptyDeleted: 'Удалённые задачи',
        addTask: 'Задача',
        discussTask: 'Обсудить с агентом',
        manualAdd: 'Ввести вручную',
        newTask: 'Новая задача',
        taskTitle: 'Название',
        taskDesc: 'Что нужно сделать',
        taskHow: 'Как делать',
        save: 'Сохранить',
        delete: 'Удалить',
        undelete: 'Восстановить',
        emptyBoard: 'Задач пока нет. Добавь первую или обсуди её в главном чате.',
        clear: 'Очистить',
        tabTasks: 'Задачи',
        tabCommits: 'Коммиты',
        tabDevlog: 'Devlog',
        devlogTitle: 'Девлог проекта',
        devlogSub: 'Пост в задачу дня: задачи, стримы и анонсы — в свои каналы.',
        kindDevlog: 'Девлог',
        kindStream: 'Стрим',
        kindAnnounce: 'Анонс',
        postRu: 'Текст для русской аудитории',
        postEn: 'Text for the English audience',
        publish: 'Опубликовать',
        publishing: 'Отправляю…',
        sent: 'Отправлено',
        someFailed: 'Часть каналов не приняла пост',
        noChannels: 'Каналов пока нет. Открой настройки и добавь.',
        channelsSettings: 'Каналы',
        botToken: 'Telegram bot token',
        addChannel: 'Добавить канал',
        saveSettings: 'Сохранить',
        importJson: 'Импорт JSON',
        importJsonHint: 'Вставь массив каналов и нажми «Добавить из JSON».',
        settings: 'Настройки',
        tasksSection: 'Задачи для поста',
        groupDoing: 'В работе',
        groupDone: 'Готовые',
        groupPublished: 'Опубликованные',
        hideFromSuggestions: 'Перенести в «Опубликованные»',
        targetLang: 'Язык перевода',
        importDone: 'Импортировано задач: ',
        templateSaved: 'Шаблон сохранён',
        save: 'Сохранить',
        attach: 'Прикрепить',
        removeImage: 'Убрать',
        translate: 'Перевести',
        translating: 'Перевожу…',
        needKey: 'Для перевода нужен ключ DeepSeek в настройках',
        deepseekKey: 'DeepSeek API key',
        templates: 'Шаблоны',
        saveTemplate: 'Сохранить как шаблон',
        templateName: 'Название шаблона',
        noTemplates: 'Шаблонов пока нет. Напиши текст и сохрани как шаблон.',
        insert: 'Вставить',
        preview: 'Предпросмотр',
        emptyList: 'Пусто',
        history: 'История постов',
        name: 'Название',
        platform: 'Площадка',
        kind: 'Тип',
        lang: 'Язык',
        chatId: 'chat_id',
        threadId: 'thread_id',
        webhook: 'Вебхук',
        commitsEmpty: 'Коммитов пока нет. Нажми «Импорт коммитов» и выбери .kb/commits.json.',
        importCommits: 'Импорт коммитов',
        commitDetails: 'Коммит',
        author: 'Автор',
        branch: 'Ветка',
        files: 'Файлы',
        copyRevert: 'Скопировать команду отмены',
        restoreFrom: 'Восстановиться',
        restoreTitle: 'Восстановиться из этого коммита?',
        restoreText: 'Будет создан новый коммит, который отменяет выбранный. История не переписывается, коммиты после него остаются. Агент проверит незакоммиченные изменения и предупредит, если что-то помешает.',
        restoreConfirm: 'Да, открыть чат',
        viewTask: 'Задача',
        commitsTitle: 'Коммиты',
        showAll: 'Показать полностью',
        showLess: 'Свернуть',
        refresh: 'Обновить',
        refreshing: 'Обновляю…',
        refreshed: 'Обновлено',
        noFile: 'Не удалось прочитать файл',
        today: 'Сегодня',
        copySha: 'Копировать sha',
        yesterday: 'Вчера',
        search: 'Поиск по коммитам',
        allAuthors: 'Все авторы',
        allBranches: 'Все ветки',
        allTasksFilter: 'Все задачи',
        changedFiles: 'Изменённые файлы',
        dirtyBanner: 'Есть незакоммиченные изменения',
        clearTitle: 'Очистить доску',
        clearText: 'Удалятся все задачи текущего проекта вместе с корзиной. История коммитов и чаты останутся. Действие нельзя отменить.',
        clearConfirm: 'Да, очистить',
        copiedCommand: 'Команда скопирована',
        openTask: 'Открыть задачу',
        noTask: 'В сообщении нет кода задачи',
        discussionPrompt: 'Помоги сформулировать новую задачу для доски проекта.',
        recordsShort: 'зап.',
        emptyTodo: 'Перетащи сюда задачу',
        emptyDoing: 'Ничего не в работе',
        emptyDone: 'Пока пусто',
        emptyArchived: 'Сюда уходят закрытые',
        open: 'Открыть',
        chat: 'Чат',
        toChat: 'В чат',
        archive: 'Архив',
        restore: 'Вернуть',
        newChat: 'Новый чат по задаче',
        records: 'Записи',
        blocked: 'Блокер',
        what: 'Что нужно сделать',
        how: 'Как будем делать',
        blocker: 'Блокер',
        block: 'Заблокировать',
        unblock: 'Снять блокер',
        blockerReason: 'Почему заблокировано',
        blockingTask: 'Блокирует задача…',
        wall: 'Стена задачи',
        emptyWall: 'Пока тихо. Напиши, что сделано за день или что мешает.',
        you: 'Ты',
        postPlaceholder: 'Что сделано сегодня? Что мешает? Приложи скриншот…',
        publish: 'Опубликовать',
        attach: 'Прикрепить',
        hint: 'Ctrl+Enter — опубликовать, Ctrl+V — вставить скриншот',
        close: 'Закрыть',
        newProject: 'Новый проект',
        folderLabel: 'Папка проекта',
        folderHint: 'Выбери папку на диске или впиши путь. Пустое поле — текущая папка.',
        pick: 'Выбрать папку',
        pickHint: 'Откроется системный проводник',
        create: 'Создать проект и главный чат',
        creating: 'Создаю…',
        cancel: 'Отмена',
        translateTitle: 'Перевести на свой язык',
        translateHow: 'Как это работает',
        translateHint: 'Скопируй промпт, отправь своему ИИ, вставь его ответ сюда и нажми «Применить».',
        copyPrompt: 'Копировать промпт',
        copied: 'Скопировано',
        apply: 'Применить',
        packed: 'Словарь применён',
        pastePlaceholder: 'Вставь JSON словаря, который вернул ИИ',
        noProjects: 'Нет ни одной папки проекта. Нажми «Создать проект».',
        recordsShort: 'зап.',
      },
      en: {
        title: 'Work Space',
        sub: 'Work planning: cards, statuses, a task wall and a separate chat for each task.',
        project: 'Project',
        createProject: 'New project',
        mainChat: 'Main chat',
        createMainChat: 'Create main chat',
        pickMainChat: 'Pick main chat',
        export: 'Export',
        import: 'Import',
        language: 'Interface language',
        translate: 'Translate',
        todo: 'Backlog',
        doing: 'In progress',
        done: 'Done',
        archived: 'Archive',
        deleted: 'Deleted',
        emptyDeleted: 'Deleted tasks',
        addTask: 'Task',
        discussTask: 'Discuss with the agent',
        manualAdd: 'Type manually',
        newTask: 'New task',
        taskTitle: 'Title',
        taskDesc: 'What to do',
        taskHow: 'How to do it',
        save: 'Save',
        delete: 'Delete',
        undelete: 'Restore',
        emptyBoard: 'No tasks yet. Add the first one or discuss it in the main chat.',
        clear: 'Clear',
        tabTasks: 'Tasks',
        tabCommits: 'Commits',
        tabDevlog: 'Devlog',
        devlogTitle: 'Project devlog',
        devlogSub: 'Task of the day, streams and announcements — into their channels.',
        kindDevlog: 'Devlog',
        kindStream: 'Stream',
        kindAnnounce: 'Announcement',
        postRu: 'Text for the Russian audience',
        postEn: 'Text for the English audience',
        publish: 'Publish',
        publishing: 'Sending…',
        sent: 'Sent',
        someFailed: 'Some channels rejected the post',
        noChannels: 'No channels yet. Open settings and add one.',
        channelsSettings: 'Channels',
        botToken: 'Telegram bot token',
        addChannel: 'Add channel',
        saveSettings: 'Save',
        importJson: 'JSON import',
        importJsonHint: 'Paste the channels array and press “Add from JSON”.',
        settings: 'Settings',
        tasksSection: 'Tasks for the post',
        groupDoing: 'In progress',
        groupDone: 'Done',
        groupPublished: 'Published',
        hideFromSuggestions: 'Move to Published',
        targetLang: 'Translation language',
        importDone: 'Imported tasks: ',
        templateSaved: 'Template saved',
        save: 'Save',
        attach: 'Attach',
        removeImage: 'Remove',
        translate: 'Translate',
        translating: 'Translating…',
        needKey: 'Translation needs a DeepSeek key in settings',
        deepseekKey: 'DeepSeek API key',
        templates: 'Templates',
        saveTemplate: 'Save as template',
        templateName: 'Template name',
        noTemplates: 'No templates yet. Write a post and save it as a template.',
        insert: 'Insert',
        preview: 'Preview',
        emptyList: 'Empty',
        history: 'Post history',
        name: 'Name',
        platform: 'Platform',
        kind: 'Kind',
        lang: 'Language',
        chatId: 'chat_id',
        threadId: 'thread_id',
        webhook: 'Webhook',
        commitsEmpty: 'No commits yet. Press “Import commits” and choose .kb/commits.json.',
        importCommits: 'Import commits',
        commitDetails: 'Commit',
        author: 'Author',
        branch: 'Branch',
        files: 'Files',
        copyRevert: 'Copy revert command',
        restoreFrom: 'Restore',
        restoreTitle: 'Restore from this commit?',
        restoreText: 'A new commit will be created that reverts the selected one. History is not rewritten and later commits stay. The agent will check uncommitted changes and warn if something blocks it.',
        restoreConfirm: 'Yes, open the chat',
        viewTask: 'Task',
        commitsTitle: 'Commits',
        showAll: 'Show all',
        showLess: 'Collapse',
        refresh: 'Refresh',
        refreshing: 'Refreshing…',
        refreshed: 'Refreshed',
        noFile: 'Could not read the file',
        today: 'Today',
        copySha: 'Copy sha',
        yesterday: 'Yesterday',
        search: 'Search commits',
        allAuthors: 'All authors',
        allBranches: 'All branches',
        allTasksFilter: 'All tasks',
        changedFiles: 'Changed files',
        dirtyBanner: 'Uncommitted changes present',
        clearTitle: 'Clear the board',
        clearText: 'All tasks of this project and its recycle bin will be removed. Commit history and chats stay. This cannot be undone.',
        clearConfirm: 'Yes, clear',
        copiedCommand: 'Command copied',
        openTask: 'Open task',
        noTask: 'No task code in the message',
        discussionPrompt: 'Help me shape a new task for the project board.',
        recordsShort: 'posts',
        emptyTodo: 'Drop a task here',
        emptyDoing: 'Nothing in progress',
        emptyDone: 'Nothing yet',
        emptyArchived: 'Closed tasks live here',
        open: 'Open',
        chat: 'Chat',
        toChat: 'Open chat',
        archive: 'Archive',
        restore: 'Restore',
        newChat: 'New chat for this task',
        records: 'Posts',
        blocked: 'Blocked',
        what: 'What to do',
        how: 'How to do it',
        blocker: 'Blocker',
        block: 'Block',
        unblock: 'Unblock',
        blockerReason: 'Why is it blocked',
        blockingTask: 'Blocked by task…',
        wall: 'Task wall',
        emptyWall: 'Nothing yet. Write what was done today or what blocks you.',
        you: 'You',
        postPlaceholder: 'What was done today? What blocks you? Attach a screenshot…',
        publish: 'Publish',
        attach: 'Attach',
        hint: 'Ctrl+Enter — publish, Ctrl+V — paste a screenshot',
        close: 'Close',
        newProject: 'New project',
        folderLabel: 'Project folder',
        folderHint: 'Pick a folder or type a path. Empty means the current folder.',
        pick: 'Choose folder',
        pickHint: 'The system file dialog opens',
        create: 'Create project and main chat',
        creating: 'Creating…',
        cancel: 'Cancel',
        translateTitle: 'Translate to your language',
        translateHow: 'How it works',
        translateHint: 'Copy the prompt, send it to your AI, paste the answer here and press Apply.',
        copyPrompt: 'Copy prompt',
        copied: 'Copied',
        apply: 'Apply',
        packed: 'Dictionary applied',
        pastePlaceholder: 'Paste the dictionary JSON your AI returned',
        noProjects: 'No project folders yet. Press “New project”.',
        recordsShort: 'posts',
      },
    };

    const STATUS_COLORS = { main: '#4d6bfe', todo: '#8b949e', doing: '#d29922', done: '#2da44e', archived: '#6e7781', blocked: '#cf222e' };

    const CSS = `
.ws-tasks {
  display: flex; flex-direction: column; gap: 18px;
  height: 100%; overflow: auto; padding: 26px 24px 32px; box-sizing: border-box;
  color: var(--dsw-alias-label-primary, #111);
  background:
    radial-gradient(900px 420px at 15% -10%, rgba(77,107,254,0.08), transparent 60%),
    radial-gradient(700px 380px at 85% 0%, rgba(210,153,34,0.07), transparent 60%);
}
.ws-tasks-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; flex-wrap: wrap; }
.ws-tasks-title { margin: 0; font-size: 21px; font-weight: 680; letter-spacing: -0.02em; }
.ws-tasks-sub { margin: 5px 0 0; font-size: 12.5px; color: var(--dsw-alias-label-tertiary, #8a8f98); }
.ws-tools { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.ws-board { display: grid; grid-template-columns: repeat(5, minmax(205px, 1fr)); gap: 14px; align-items: start; }
.ws-col {
  display: flex; flex-direction: column; gap: 9px; padding: 12px; border-radius: 16px;
  background: var(--dsw-alias-bg-layer-2, rgba(127,127,127,0.045));
  border: 1px solid var(--dsw-alias-border-l2, rgba(127,127,127,0.14));
  min-height: 240px;
}
.ws-col.over { border-color: rgba(77,107,254,0.55); background: rgba(77,107,254,0.07); }
.ws-col-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 2px 3px 6px; }
.ws-col-name { display: flex; align-items: center; gap: 8px; font-size: 12.5px; font-weight: 650; }
.ws-col-bar { width: 9px; height: 9px; border-radius: 3px; }
.ws-col-count {
  min-width: 21px; text-align: center; font-size: 11px; font-weight: 600;
  padding: 2px 7px; border-radius: 999px;
  background: var(--dsw-alias-bg-layer-1, rgba(127,127,127,0.12));
  color: var(--dsw-alias-label-secondary, #666);
}
.ws-card {
  display: flex; flex-direction: column; gap: 8px; padding: 11px 12px 10px;
  border-radius: 12px; background: var(--dsw-alias-bg-base, #fff);
  border: 1px solid rgba(127,127,127,0.16);
  box-shadow: 0 1px 2px rgba(16,24,40,0.06);
  cursor: grab;
  transition: box-shadow 140ms ease, transform 140ms ease, border-color 140ms ease;
}
.ws-card:hover { box-shadow: 0 8px 20px rgba(16,24,40,0.14); transform: translateY(-2px); }
.ws-card.blocked { border-color: rgba(207,34,46,0.55); box-shadow: 0 0 0 3px rgba(207,34,46,0.08); }
.ws-card.archived { opacity: 0.72; }
.ws-labelrow { display: flex; align-items: center; gap: 6px; }
.ws-label {
  font-size: 10px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase;
  padding: 3px 8px; border-radius: 6px; color: #fff;
}
.ws-card-code { font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 6px; background: rgba(127,127,127,0.12); color: var(--dsw-alias-label-secondary, #666); }
.ws-card-title { font-size: 13px; font-weight: 600; line-height: 18px; }
.ws-card.done .ws-card-title { color: var(--dsw-alias-label-tertiary, #8a8f98); text-decoration: line-through; }
.ws-card-note { font-size: 11.5px; line-height: 16px; color: var(--dsw-alias-label-tertiary, #8a8f98); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.ws-card-last { display: flex; flex-direction: column; gap: 5px; padding: 7px 8px; border-radius: 9px; background: var(--dsw-alias-bg-layer-2, rgba(127,127,127,0.06)); }
.ws-card-lasttext { font-size: 11.5px; line-height: 15px; color: var(--dsw-alias-label-secondary, #666); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.ws-card-lastimg { width: 100%; max-height: 120px; object-fit: cover; border-radius: 7px; }
.ws-carousel { display: flex; gap: 5px; overflow-x: auto; padding-bottom: 2px; }
.ws-carousel img { height: 46px; width: 46px; object-fit: cover; flex: none; border-radius: 7px; border: 1px solid rgba(127,127,127,0.22); }
.ws-card-meta { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; font-size: 10.5px; color: var(--dsw-alias-label-tertiary, #8a8f98); }
.ws-meta-chip { display: inline-flex; align-items: center; gap: 4px; padding: 2px 6px; border-radius: 6px; background: rgba(127,127,127,0.1); }
.ws-meta-chip.ok { background: rgba(46,160,67,0.12); color: #1a7f37; }
.ws-card-actions { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; padding-top: 2px; }
.ws-chip {
  height: 25px; padding: 0 9px; border: 1px solid rgba(127,127,127,0.24); border-radius: 8px;
  background: transparent; color: var(--dsw-alias-label-secondary, #666);
  font: inherit; font-size: 11px; font-weight: 550; cursor: pointer; white-space: nowrap;
}
.ws-chip:hover { color: var(--dsw-alias-label-primary, #111); background: rgba(127,127,127,0.1); }
.ws-chip.primary { border-color: rgba(77,107,254,0.55); color: #3b5bdb; background: rgba(77,107,254,0.07); }
.ws-chip.danger:hover { color: #cf222e; border-color: rgba(207,34,46,0.5); background: rgba(207,34,46,0.08); }
.ws-icon-btn {
  width: 28px; height: 28px; border-radius: 4px; border: none;
  background: transparent; color: var(--dsw-alias-label-secondary, #666);
  cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
}
.ws-icon-btn:hover { background: rgba(127,127,127,0.12); color: var(--dsw-alias-label-primary, #111); }
.ws-picker-btn {
  display: flex; align-items: center; gap: 8px; height: 30px; padding: 0 10px;
  border: 1px solid rgba(127,127,127,0.24); border-radius: 8px; background: transparent;
  color: inherit; font: inherit; font-size: 12px; cursor: pointer;
}
.ws-picker-btn:hover { background: rgba(127,127,127,0.1); }
.ws-tool { position: relative; }
.ws-menu {
  position: absolute; top: calc(100% + 6px); right: 0; z-index: 40; min-width: 168px;
  padding: 6px; border-radius: 10px; background: var(--dsw-alias-bg-base, #fff);
  border: 1px solid rgba(127,127,127,0.24); box-shadow: 0 12px 32px rgba(16,24,40,0.22);
  display: flex; flex-direction: column; gap: 2px;
}
.ws-menu-item {
  text-align: left; padding: 7px 9px; border-radius: 7px; border: none; background: transparent;
  color: var(--dsw-alias-label-primary, #111); font: inherit; font-size: 12px; cursor: pointer;
}
.ws-menu-item:hover { background: rgba(127,127,127,0.12); }
.ws-menu-item.active { background: rgba(77,107,254,0.14); color: #3b5bdb; font-weight: 600; }
.ws-col-empty { font-size: 11.5px; color: var(--dsw-alias-label-tertiary, #9aa0a6); padding: 14px 6px; text-align: center; border: 1px dashed rgba(127,127,127,0.28); border-radius: 10px; }
.ws-tasks-foot { display: flex; gap: 16px; flex-wrap: wrap; font-size: 11.5px; color: var(--dsw-alias-label-tertiary, #8a8f98); }
.ws-dot { display: inline-block; width: 7px; height: 7px; border-radius: 50%; flex: none; margin-inline-end: 5px; vertical-align: middle; }
.ws-modal-mask {
  position: fixed; inset: 0; z-index: 60; display: flex; align-items: center; justify-content: center;
  padding: 24px; overflow: auto; background: rgba(15,20,30,0.5); backdrop-filter: blur(2px);
}
.ws-modal {
  display: flex; flex-direction: column; width: min(760px, 100%); max-height: calc(100vh - 48px);
  background: var(--dsw-alias-bg-base, #fff); color: var(--dsw-alias-label-primary, #111);
  border-radius: 18px; overflow: hidden; box-shadow: 0 24px 60px rgba(16,24,40,0.3);
  border: 1px solid rgba(127,127,127,0.2);
}
.ws-modal-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; padding: 18px 20px 14px; border-bottom: 1px solid rgba(127,127,127,0.14); }
.ws-modal-code { font-size: 11px; font-weight: 700; letter-spacing: 0.04em; color: #3b5bdb; }
.ws-modal-title { margin: 4px 0 0; font-size: 18px; font-weight: 680; letter-spacing: -0.02em; }
.ws-modal-close { width: 28px; height: 28px; border-radius: 8px; border: 1px solid transparent; background: transparent; color: var(--dsw-alias-label-secondary, #666); font-size: 16px; cursor: pointer; }
.ws-modal-close:hover { background: rgba(127,127,127,0.12); }
.ws-modal-body { display: flex; flex-direction: column; gap: 16px; padding: 16px 20px; overflow: auto; }
.ws-section { display: flex; flex-direction: column; gap: 6px; }
.ws-section-label { font-size: 10.5px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: var(--dsw-alias-label-tertiary, #8a8f98); }
.ws-section-text { font-size: 12.5px; line-height: 19px; }
.ws-status-row { display: flex; gap: 6px; flex-wrap: wrap; }
.ws-status-pill { height: 27px; padding: 0 11px; border-radius: 999px; border: 1px solid rgba(127,127,127,0.22); background: transparent; color: var(--dsw-alias-label-secondary, #666); font: inherit; font-size: 11.5px; font-weight: 600; cursor: pointer; }
.ws-status-pill.active { color: #fff; border-color: transparent; }
.ws-blocker-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.ws-blocker-row input[type="text"], .ws-blocker-row select { height: 28px; padding: 0 9px; border-radius: 8px; border: 1px solid rgba(127,127,127,0.24); background: transparent; color: inherit; font: inherit; font-size: 11.5px; }
.ws-wall { display: flex; flex-direction: column; gap: 10px; }
.ws-post { display: flex; gap: 10px; }
.ws-avatar { width: 26px; height: 26px; border-radius: 50%; flex: none; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; color: #fff; background: linear-gradient(135deg, #4d6bfe, #7c5cff); }
.ws-post-body { display: flex; flex-direction: column; gap: 5px; flex: 1; min-width: 0; }
.ws-post-head { display: flex; align-items: baseline; gap: 8px; }
.ws-post-author { font-size: 12px; font-weight: 600; }
.ws-post-date { font-size: 10.5px; color: var(--dsw-alias-label-tertiary, #8a8f98); }
.ws-post-text { font-size: 12.5px; line-height: 18px; white-space: pre-wrap; }
.ws-post-image { max-width: 100%; max-height: 300px; border-radius: 10px; object-fit: contain; border: 1px solid rgba(127,127,127,0.18); }
.ws-post-empty { font-size: 12px; color: var(--dsw-alias-label-tertiary, #8a8f98); padding: 16px; text-align: center; border: 1px dashed rgba(127,127,127,0.28); border-radius: 10px; }
.ws-modal-composer { display: flex; flex-direction: column; gap: 8px; padding: 12px 20px 16px; border-top: 1px solid rgba(127,127,127,0.14); background: var(--dsw-alias-bg-layer-2, rgba(127,127,127,0.03)); }
.ws-modal-composer textarea { width: 100%; box-sizing: border-box; min-height: 62px; resize: vertical; border: 1px solid rgba(127,127,127,0.22); border-radius: 10px; background: var(--dsw-alias-bg-base, #fff); color: inherit; font: inherit; font-size: 12.5px; line-height: 18px; padding: 8px 10px; }
.ws-composer-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.ws-composer-hint { font-size: 10.5px; color: var(--dsw-alias-label-tertiary, #8a8f98); }
.ws-attach-preview { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
.ws-attach-preview img { height: 54px; border-radius: 8px; border: 1px solid rgba(127,127,127,0.28); }
.ws-tabs { display: inline-flex; gap: 4px; padding: 3px; border-radius: 10px; background: rgba(127,127,127,0.1); }
.ws-tab {
  height: 26px; padding: 0 12px; border-radius: 8px; border: none; background: transparent;
  color: var(--dsw-alias-label-secondary, #666); font: inherit; font-size: 12px; font-weight: 600; cursor: pointer;
}
.ws-tab.active { background: var(--dsw-alias-bg-base, #fff); color: var(--dsw-alias-label-primary, #111); box-shadow: 0 1px 3px rgba(0,0,0,0.12); }
.ws-commits { display: flex; flex-direction: column; gap: 8px; }
.ws-commit-toolbar { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin-bottom: 6px; }
.ws-search {
  height: 28px; padding: 0 10px; border-radius: 8px; min-width: 220px;
  border: 1px solid rgba(127,127,127,0.24); background: transparent;
  color: inherit; font: inherit; font-size: 12px;
}
.ws-commit-status {
  display: flex; align-items: center; gap: 12px; font-size: 12px;
  color: var(--dsw-alias-label-secondary, #666);
  padding: 8px 12px; border-radius: 10px; background: rgba(127,127,127,0.08);
}
.ws-dirty {
  font-size: 12px; padding: 8px 12px; border-radius: 10px; color: #cf222e;
  background: rgba(207,34,46,0.1); border: 1px solid rgba(207,34,46,0.3);
}
.ws-commit-group { display: flex; flex-direction: column; gap: 8px; }
.ws-commit-group-label {
  font-size: 11px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;
  color: var(--dsw-alias-label-tertiary, #8a8f98); margin-top: 6px;
}
.ws-dirty-list { margin-top: 6px; display: flex; flex-direction: column; gap: 2px; }
.ws-dirty-file { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11px; color: var(--dsw-alias-label-secondary, #666); }
.ws-diff {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 11.5px; line-height: 16px; white-space: pre-wrap;
  max-height: 260px; overflow: auto; padding: 10px; border-radius: 10px;
  background: var(--dsw-alias-bg-layer-2, rgba(127,127,127,0.06));
  border: 1px solid rgba(127,127,127,0.18);
}
.ws-commit { position: relative; padding-left: 10px; }
.ws-graph { position: relative; align-self: stretch; flex: none; min-height: 42px; }
.ws-lane { position: absolute; top: 0; bottom: 0; width: 2px; opacity: 0.35; border-radius: 1px; }
.ws-node { position: absolute; top: 50%; width: 9px; height: 9px; border-radius: 50%; transform: translateY(-50%); box-shadow: 0 0 0 2px var(--dsw-alias-bg-base, #fff); }
.ws-branch-chip { display: inline-flex; align-items: center; gap: 5px; }
.ws-branch-dot { width: 7px; height: 7px; border-radius: 50%; display: inline-block; }
.ws-commit-action { flex: none; align-self: center; }
.ws-commit-actions { display: flex; flex-direction: column; gap: 6px; align-items: flex-end; margin-left: auto; flex: none; }
.ws-spoiler { display: flex; flex-direction: column; gap: 4px; }
.ws-spoiler-head {
  display: flex; align-items: center; gap: 8px;
  padding: 7px 9px; border-radius: 9px; cursor: pointer;
  border: 1px solid rgba(127,127,127,0.2); background: transparent;
  color: var(--dsw-alias-label-primary, #111); font: inherit; font-size: 12px; font-weight: 600;
}
.ws-spoiler-head:hover { background: rgba(127,127,127,0.08); }
.ws-spoiler-count { font-size: 11px; color: var(--dsw-alias-label-tertiary, #8a8f98); font-variant-numeric: tabular-nums; }
.ws-task-list { display: flex; flex-direction: column; gap: 4px; padding: 2px 0 4px 8px; }
.ws-editor-toolbar { display: flex; align-items: center; gap: 2px; flex-wrap: wrap; margin-bottom: 4px; }
.ws-md-btn {
  width: 26px; height: 26px; display: inline-flex; align-items: center; justify-content: center;
  border: none; background: transparent; color: var(--dsw-alias-label-secondary, #666);
  border-radius: 6px; cursor: pointer; font: inherit; font-size: 11.5px; font-weight: 700;
}
.ws-md-btn:hover { background: rgba(127,127,127,0.12); color: var(--dsw-alias-label-primary, #111); }
.ws-gallery { display: flex; flex-wrap: wrap; gap: 8px; }
.ws-gallery-item { position: relative; }
.ws-gallery-item img { height: 74px; border-radius: 8px; border: 1px solid rgba(127,127,127,0.22); object-fit: cover; }
.ws-gallery-remove {
  position: absolute; top: -6px; right: -6px; width: 18px; height: 18px; border-radius: 50%;
  border: 1px solid rgba(127,127,127,0.3); background: var(--dsw-alias-bg-base, #fff);
  color: var(--dsw-alias-label-secondary, #666); font-size: 11px; line-height: 1; cursor: pointer;
  display: inline-flex; align-items: center; justify-content: center;
}
.ws-composer-card {
  display: flex; flex-direction: column; gap: 12px;
  padding: 16px; border-radius: 16px;
  border: 1px solid rgba(127,127,127,0.18);
  background: var(--dsw-alias-bg-layer-1, #fff);
  box-shadow: 0 2px 10px rgba(16,24,40,0.06);
}
.ws-composer-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; }
.ws-toolbar { display: flex; align-items: center; gap: 6px; }
.ws-editor { display: flex; flex-direction: column; gap: 8px; }
.ws-editor-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.ws-editor textarea {
  width: 100%; box-sizing: border-box; resize: vertical;
  border: 1px solid rgba(127,127,127,0.24); border-radius: 10px;
  background: var(--dsw-alias-bg-base, #fff); color: inherit;
  font: inherit; font-size: 12.5px; line-height: 18px; padding: 10px 12px;
}
.ws-editor textarea:focus-visible { outline: 2px solid rgba(77,107,254,0.55); outline-offset: 1px; }
.ws-preview {
  min-height: 110px; padding: 10px 12px; border-radius: 10px;
  border: 1px dashed rgba(127,127,127,0.3); background: rgba(127,127,127,0.04);
  font-size: 12.5px; line-height: 19px; white-space: normal; overflow-wrap: anywhere;
}
.ws-preview pre, .ws-preview code {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11.5px;
  background: rgba(127,127,127,0.12); border-radius: 6px; padding: 1px 5px;
}
.ws-preview pre { padding: 8px 10px; overflow: auto; }
.ws-preview a { color: var(--dsw-alias-link, #3b5bdb); }
.ws-publish { height: 30px; padding: 0 16px; font-weight: 600; }
.ws-segment { display: inline-flex; gap: 2px; padding: 3px; border-radius: 8px; background: rgba(127,127,127,0.09); }
.ws-segment .ws-chip {
  border: none; background: transparent; height: 26px; padding: 0 12px;
  border-radius: 6px; font-size: 12px; font-weight: 600;
  color: var(--dsw-alias-label-secondary, #9aa0a6);
}
.ws-segment .ws-chip:hover { background: rgba(127,127,127,0.12); color: inherit; }
.ws-segment .ws-chip.primary { background: var(--dsw-alias-bg-base, #fff); color: #5865F2; box-shadow: 0 1px 3px rgba(0,0,0,0.25); }
.ws-editor-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap; }
.ws-head-tools { display: flex; align-items: center; gap: 6px; }
.ws-editor-toolbar { border: none; margin: 0; padding: 0; }
.ws-spoiler-head {
  background: transparent; border: none; border-radius: 6px; height: 28px; padding: 0 9px;
  color: var(--dsw-alias-label-secondary, #9aa0a6); font-weight: 500;
}
.ws-spoiler-head:hover { background: rgba(127,127,127,0.1); color: inherit; }
.ws-spoiler-head.open { background: rgba(88,101,242,0.15); color: #b3b9ff; }
.ws-spoiler-count { background: transparent; opacity: 0.75; font-weight: 500; padding: 0; min-width: 0; height: auto; }
.ws-hide-check {
  display: inline-flex; align-items: center; gap: 6px; font-size: 11.5px;
  color: var(--dsw-alias-label-secondary, #9aa0a6); cursor: pointer;
}
.ws-hide-check input { accent-color: #5865F2; width: 14px; height: 14px; margin: 0; }
.ws-spoiler-row { display: flex; gap: 6px; flex-wrap: wrap; }
.ws-spoiler-head {
  height: 30px; padding: 0 10px; border-radius: 4px; gap: 6px;
  background: rgba(127,127,127,0.08); border: 1px solid rgba(127,127,127,0.14);
  font-size: 12px; font-weight: 600; color: inherit;
}
.ws-spoiler-head:hover { background: rgba(127,127,127,0.14); }
.ws-spoiler-head.open { background: rgba(88,101,242,0.18); border-color: rgba(88,101,242,0.55); color: #c9cdfb; }
.ws-spoiler-count {
  min-width: 18px; height: 18px; padding: 0 5px; border-radius: 9px;
  background: rgba(127,127,127,0.18); font-size: 10.5px; font-weight: 600;
  display: inline-flex; align-items: center; justify-content: center;
}
.ws-task-item { padding: 6px 8px; border-radius: 4px; }
.ws-task-item.active { background: rgba(88,101,242,0.18); border-color: rgba(88,101,242,0.5); }
.ws-channel {
  display: inline-flex; align-items: center; gap: 6px; height: 26px; padding: 0 9px;
  border-radius: 4px; border: 1px solid rgba(127,127,127,0.14);
  background: rgba(127,127,127,0.06); font-size: 11.5px; cursor: pointer;
}
.ws-channel:hover { background: rgba(127,127,127,0.12); }
.ws-channel input[type="checkbox"] { accent-color: #5865F2; width: 14px; height: 14px; margin: 0; }
.ws-chip.ws-publish {
  height: 32px; padding: 0 16px; border-radius: 4px; font-weight: 600;
  background: #5865F2; color: #fff; border: 1px solid transparent;
}
.ws-chip.ws-publish:hover { background: #4752c4; color: #fff; }
.ws-chip.ws-publish:disabled { opacity: 0.6; }
.ws-md-btn { width: 28px; height: 28px; border-radius: 4px; }
.ws-md-btn:hover { background: rgba(127,127,127,0.16); }
.ws-editor-toolbar { gap: 1px; padding-bottom: 6px; border-bottom: 1px solid rgba(127,127,127,0.12); margin-bottom: 8px; }
.ws-composer-card { padding: 16px 18px; border-radius: 12px; gap: 14px; }
.ws-editor textarea { border-radius: 6px; background: rgba(127,127,127,0.06); }
.ws-editor textarea:focus-visible { outline: 2px solid #5865F2; outline-offset: 0; }
.ws-spoiler-head.open { background: rgba(77,107,254,0.12); border-color: rgba(77,107,254,0.45); }
.ws-task-thumb {
  width: 26px; height: 26px; border-radius: 6px; object-fit: cover; flex: none;
  border: 1px solid rgba(127,127,127,0.25);
}
.ws-task-thumb-empty {
  display: inline-flex; align-items: center; justify-content: center;
  background: rgba(127,127,127,0.12); font-size: 13px;
}
.ws-task-item { display: flex; align-items: center; gap: 8px; }
.ws-task-item {
  text-align: left; padding: 7px 9px; border-radius: 8px; border: 1px solid transparent;
  background: transparent; color: inherit; font: inherit; font-size: 12px; cursor: pointer;
}
.ws-task-item:hover { background: rgba(127,127,127,0.1); border-color: rgba(127,127,127,0.22); }
.ws-task-item.active { background: rgba(77,107,254,0.1); border-color: rgba(77,107,254,0.45); }
.ws-commit-mini { display: flex; align-items: baseline; gap: 8px; text-align: left; padding: 6px 8px; border-radius: 8px; border: 1px solid rgba(127,127,127,0.18); background: transparent; color: inherit; font: inherit; cursor: pointer; }
.ws-commit-mini:hover { background: rgba(127,127,127,0.1); }
.ws-commit-mini-date { margin-left: auto; font-size: 10.5px; color: var(--dsw-alias-label-tertiary, #8a8f98); }
.ws-card-commit { font-size: 10.5px; color: var(--dsw-alias-label-tertiary, #8a8f98); }
.ws-diff-more {
  align-self: flex-start; font-size: 11px; color: var(--dsw-alias-link, #3b5bdb);
  background: none; border: none; cursor: pointer; padding: 0;
}
.ws-commit {
  display: flex; align-items: flex-start; gap: 12px; padding: 12px 14px; cursor: pointer;
  border-radius: 12px; background: var(--dsw-alias-bg-layer-1, #fff);
  border: 1px solid rgba(127,127,127,0.18);
  transition: box-shadow 120ms ease, transform 120ms ease;
}
.ws-commit:hover { box-shadow: 0 6px 18px rgba(16,24,40,0.12); transform: translateY(-1px); }
.ws-sha { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 11px; font-weight: 700; padding: 3px 7px; border-radius: 6px; background: rgba(77,107,254,0.12); color: #3b5bdb; flex: none; }
.ws-commit-body { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.ws-commit-msg { font-size: 12.5px; font-weight: 600; line-height: 17px; word-break: break-word; }
.ws-commit-meta { display: flex; gap: 10px; flex-wrap: wrap; font-size: 10.5px; color: var(--dsw-alias-label-tertiary, #8a8f98); }
.ws-file-row { display: flex; justify-content: space-between; gap: 12px; font-size: 11.5px; padding: 3px 0; border-bottom: 1px dashed rgba(127,127,127,0.2); }
.ws-file-row:last-child { border-bottom: none; }
.ws-plus { color: #1a7f37; }
.ws-minus { color: #cf222e; }
`;

    // ---------- storage ----------

    /** Переносит данные прежних версий (kb.tasks.*) в нейтральные ключи. */
    const LEGACY_NAMES = ['status', 'project', 'links', 'main', 'board', 'deleted', 'commits', 'commits.meta', 'tab', 'lang', 'pack'];

    function migrateLegacyStorage() {
      for (const name of LEGACY_NAMES) {
        const nextKey = 'workspace.' + name;
        const oldKey = 'kb.tasks.' + name;
        try {
          if (window.localStorage.getItem(nextKey) === null) {
            const value = window.localStorage.getItem(oldKey);
            if (value !== null) window.localStorage.setItem(nextKey, value);
          }
        } catch (error) {
          /* ignore */
        }
      }
    }

    function readJSON(key, fallback) {
      try {
        const raw = window.localStorage.getItem(key);
        const parsed = raw === null ? null : JSON.parse(raw);
        return parsed && typeof parsed === 'object' ? parsed : fallback;
      } catch {
        return fallback;
      }
    }

    function writeJSON(key, value) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch {
        console.warn('work-space: storage is full');
      }
    }

    function readText(key) {
      try {
        return window.localStorage.getItem(key) || '';
      } catch {
        return '';
      }
    }

    function writeText(key, value) {
      try {
        window.localStorage.setItem(key, value);
      } catch {
        /* ignore */
      }
    }

    function makeT(lang, pack) {
      return (key) => {
        if (pack && typeof pack[key] === 'string') return pack[key];
        const table = STRINGS[lang] || STRINGS.ru;
        return table[key] !== undefined ? table[key] : (STRINGS.ru[key] !== undefined ? STRINGS.ru[key] : key);
      };
    }

    function basename(path) {
      if (typeof path !== 'string') return '';
      const parts = path.replace(/[\\/]+$/, '').split(/[\\/]/);
      return parts[parts.length - 1] || path;
    }

    function workspaceLabel(item) {
      if (typeof item.label === 'string' && item.label !== '') return item.label;
      return basename(item.path);
    }

    /** Своя доска у каждого проекта. Пустая, пока задачи не добавят. */
    function boardFor(path) {
      const map = readJSON(BOARD_KEY, {});
      const list = map[path];
      if (Array.isArray(list)) {
        return list.filter((task) => task && typeof task.id === 'string');
      }
      return [];
    }

    function saveBoard(path, tasks) {
      const map = readJSON(BOARD_KEY, {});
      writeJSON(BOARD_KEY, { ...map, [path]: tasks });
    }

    function deletedFor(path) {
      const map = readJSON(DELETED_KEY, {});
      const list = map[path];
      return Array.isArray(list) ? list.filter((task) => task && typeof task.id === 'string') : [];
    }

    function saveDeleted(path, tasks) {
      const map = readJSON(DELETED_KEY, {});
      writeJSON(DELETED_KEY, { ...map, [path]: tasks });
    }

    function commitsFor(path) {
      const map = readJSON(COMMITS_KEY, {});
      const list = map[path];
      return Array.isArray(list) ? list.filter((item) => item && typeof item === 'object') : [];
    }

    function saveCommitsMeta(path, value) {
      const map = readJSON(COMMITS_META_KEY, {});
      writeJSON(COMMITS_META_KEY, { ...map, [path]: value });
    }

    function saveCommits(path, commits) {
      const map = readJSON(COMMITS_KEY, {});
      writeJSON(COMMITS_KEY, { ...map, [path]: commits });
    }

    /** Задачи-шаблон из старых версий: убираем их с досок, где они остались. */
    const LEGACY_IDS = ['player-move', 'interaction', 'test-room', 'box-data', 'ui-hud', 'goods-carry', 'player-state'];

    function dropLegacyBoards() {
      for (const key of [BOARD_KEY, DELETED_KEY]) {
        const map = readJSON(key, {});
        let changed = false;
        for (const [path, list] of Object.entries(map)) {
          if (!Array.isArray(list) || list.length === 0) continue;
          const ids = list.map((task) => String(task && task.id));
          if (ids.length === LEGACY_IDS.length && LEGACY_IDS.every((id) => ids.indexOf(id) >= 0)) {
            delete map[path];
            changed = true;
          }
        }
        if (changed) writeJSON(key, map);
      }
    }

    function normalizeEntry(value) {
      const empty = { status: 'todo', posts: [], blocked: false, blocker: '', linked: '' };
      if (value === true) return { ...empty, status: 'done' };
      if (!value || typeof value !== 'object') return empty;
      const posts = Array.isArray(value.posts) ? value.posts.filter((post) => post && typeof post === 'object') : [];
      if (posts.length === 0 && typeof value.comment === 'string' && value.comment !== '') {
        posts.push({ at: Date.now(), text: value.comment });
      }
      const status = value.status === 'doing' || value.status === 'done' || value.status === 'archived' ? value.status : 'todo';
      return {
        status,
        posts,
        blocked: value.blocked === true,
        blocker: typeof value.blocker === 'string' ? value.blocker : '',
        linked: typeof value.linked === 'string' ? value.linked : '',
      };
    }

    function taskHeading(task) {
      return typeof task.code === 'string' && task.code !== '' ? task.code + ' \u2014 ' + task.title : task.title;
    }

    function formatDate(ts) {
      const date = new Date(ts);
      if (Number.isNaN(date.getTime())) return '';
      return date.toLocaleString('ru-RU', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' });
    }

    function buildPrompt(task, workspace) {
      const label = workspace === undefined ? 'проект' : workspaceLabel(workspace);
      const path = workspace === undefined ? '' : String(workspace.path || '');
      const lines = [taskHeading(task), ''];
      lines.push('Проект: ' + label + (path === '' ? '' : ' (' + path + ')') + '.');
      if (task.desc) lines.push(task.desc);
      if (task.how) lines.push('Как делать: ' + task.how);
      lines.push('');
      lines.push('Прочитай правила проекта и docs/design/TODO.md, потом предложи короткий план по этой задаче.');
      lines.push('Ничего не меняй без моего «ок».');
      return lines.join('\n');
    }

    function dayLabel(ts) {
      const date = new Date(ts);
      if (Number.isNaN(date.getTime())) return '';
      const now = new Date();
      const sameDay = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
      if (sameDay(date, now)) return 'today';
      const yesterday = new Date(now);
      yesterday.setDate(now.getDate() - 1);
      if (sameDay(date, yesterday)) return 'yesterday';
      return date.toLocaleDateString('ru-RU');
    }

    function branchColor(name) {
      const palette = ['#3b5bdb', '#2da44e', '#d29922', '#cf222e', '#7c5cff', '#0ea5e9', '#e8590c'];
      const text = String(name || 'main');
      let hash = 0;
      for (let index = 0; index < text.length; index += 1) hash = (hash * 31 + text.charCodeAt(index)) % 9973;
      return palette[hash % palette.length];
    }

    function statusColor(entry) {
      if (entry.blocked) return STATUS_COLORS.blocked;
      if (entry.status === 'done') return STATUS_COLORS.done;
      if (entry.status === 'doing') return STATUS_COLORS.doing;
      if (entry.status === 'archived') return STATUS_COLORS.archived;
      return STATUS_COLORS.todo;
    }

    function SessionDot({ sessionId }) {
      const [tick, setTick] = useState(0);
      useEffect(() => {
        const timer = window.setInterval(() => setTick((value) => value + 1), 1500);
        return () => window.clearInterval(timer);
      }, []);
      const color = useMemo(() => {
        const mains = readJSON(MAIN_KEY, {});
        for (const session of Object.values(mains)) if (session === sessionId) return STATUS_COLORS.main;
        const links = readJSON(LINKS_KEY, {});
        let link = null;
        for (const [path, map] of Object.entries(links)) {
          if (!map || typeof map !== 'object') continue;
          for (const [taskId, session] of Object.entries(map)) {
            if (session === sessionId) { link = { path, taskId }; break; }
          }
          if (link !== null) break;
        }
        if (link === null) return '';
        const statuses = readJSON(STATUS_KEY, {});
        return statusColor(normalizeEntry((statuses[link.path] || {})[link.taskId]));
      }, [sessionId, tick]);
      if (color === '') return null;
      return h('span', { className: 'ws-dot', style: { background: color } });
    }

    // ---------- модалки ----------

    function TaskModal({ task, entry, onPatch, onClose, board, t, commits, onOpenCommit }) {
      const [text, setText] = useState('');
      const [image, setImage] = useState('');
      const fileInput = useRef(null);

      const addPost = () => {
        if (text.trim() === '' && image === '') return;
        onPatch({ posts: entry.posts.concat([{ at: Date.now(), text, image }]) });
        setText('');
        setImage('');
      };

      const acceptFiles = (files) => {
        const file = files && files[0];
        if (!file || typeof file.type !== 'string' || !file.type.startsWith('image/')) return;
        const reader = new FileReader();
        reader.onload = () => {
          const raw = typeof reader.result === 'string' ? reader.result : '';
          if (raw === '') return;
          const img = new Image();
          img.onload = () => {
            const max = 1280;
            const scale = Math.min(1, max / Math.max(img.width, img.height));
            const canvas = document.createElement('canvas');
            canvas.width = Math.max(1, Math.round(img.width * scale));
            canvas.height = Math.max(1, Math.round(img.height * scale));
            const context = canvas.getContext('2d');
            if (context === null) return;
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
            setImage(canvas.toDataURL('image/jpeg', 0.8));
          };
          img.src = raw;
        };
        reader.readAsDataURL(file);
      };

      const statuses = ['todo', 'doing', 'done', 'archived'];
      const pills = statuses.map((id) => h('button', {
        key: id,
        type: 'button',
        className: 'ws-status-pill' + (entry.status === id ? ' active' : ''),
        style: entry.status === id ? { background: STATUS_COLORS[id] } : undefined,
        onClick: () => onPatch({ status: id }),
      }, t(id)));

      const posts = entry.posts.slice().reverse();
      const related = (Array.isArray(commits) ? commits : []).filter((commit) => task.code && String(commit.message || '').indexOf(task.code) >= 0);

      return h('div', {
        className: 'ws-modal-mask',
        onMouseDown: (event) => { if (event.target === event.currentTarget) onClose(); },
      }, h('div', { className: 'ws-modal' }, [
        h('div', { className: 'ws-modal-top', key: 'top' }, [
          h('div', { key: 'titles' }, [
            task.code ? h('div', { className: 'ws-modal-code', key: 'code' }, task.code) : null,
            h('h2', { className: 'ws-modal-title', key: 'title' }, task.title),
          ]),
          h('button', { key: 'close', type: 'button', className: 'ws-modal-close', onClick: onClose }, '\u00d7'),
        ]),
        h('div', { className: 'ws-modal-body', key: 'body' }, [
          h('div', { className: 'ws-status-row', key: 'status' }, pills),
          h('div', { className: 'ws-section', key: 'what' }, [
            h('span', { className: 'ws-section-label', key: 'label' }, t('what')),
            h('div', { className: 'ws-section-text', key: 'text' }, task.desc || task.note || ''),
          ]),
          task.how ? h('div', { className: 'ws-section', key: 'how' }, [
            h('span', { className: 'ws-section-label', key: 'label' }, t('how')),
            h('div', { className: 'ws-section-text', key: 'text' }, task.how),
          ]) : null,
          h('div', { className: 'ws-section', key: 'blocker' }, [
            h('span', { className: 'ws-section-label', key: 'label' }, t('blocker')),
            h('div', { className: 'ws-blocker-row', key: 'row' }, [
              h('button', {
                key: 'toggle', type: 'button', className: 'ws-chip',
                onClick: () => onPatch({ blocked: !entry.blocked }),
              }, entry.blocked ? t('unblock') : t('block')),
              entry.blocked ? h('input', {
                key: 'reason', type: 'text', placeholder: t('blockerReason'), defaultValue: entry.blocker,
                onChange: (event) => onPatch({ blocker: event.target.value }),
              }) : null,
              h('select', {
                key: 'link', value: entry.linked,
                onChange: (event) => onPatch({ linked: event.target.value }),
              }, [
                h('option', { key: 'none', value: '' }, t('blockingTask')),
                ...board.filter((other) => other.id !== task.id).map((other) =>
                  h('option', { key: other.id, value: other.code || other.title }, other.code || other.title)),
              ]),
            ]),
          ]),
          related.length > 0 ? h('div', { className: 'ws-section', key: 'commits' }, [
            h('span', { className: 'ws-section-label', key: 'label' }, t('commitsTitle') + ' (' + related.length + ')'),
            h('div', { key: 'list', style: { display: 'flex', flexDirection: 'column', gap: '6px' } },
              related.slice(0, 10).map((commit, index) => h('button', {
                key: String(index), type: 'button', className: 'ws-commit-mini',
                onClick: () => { onClose(); if (typeof onOpenCommit === 'function') onOpenCommit(commit); },
              }, [
                h('span', { className: 'ws-sha', key: 'sha' }, String(commit.sha || '').slice(0, 7)),
                h('span', { key: 'msg' }, String(commit.message || '').split('\n')[0]),
                h('span', { className: 'ws-commit-mini-date', key: 'date' }, formatDate(new Date(commit.date || 0).getTime())),
              ]))),
          ]) : null,
          h('div', { className: 'ws-section', key: 'wall' }, [
            h('span', { className: 'ws-section-label', key: 'label' }, t('wall')),
            posts.length === 0
              ? h('div', { className: 'ws-post-empty', key: 'empty' }, t('emptyWall'))
              : h('div', { className: 'ws-wall', key: 'wall' }, posts.map((post, index) => h('div', { className: 'ws-post', key: String(index) }, [
                  h('div', { className: 'ws-avatar', key: 'avatar' }, 'Я'),
                  h('div', { className: 'ws-post-body', key: 'body' }, [
                    h('div', { className: 'ws-post-head', key: 'head' }, [
                      h('span', { className: 'ws-post-author', key: 'author' }, t('you')),
                      h('span', { className: 'ws-post-date', key: 'date' }, formatDate(post.at)),
                    ]),
                    post.text === '' ? null : h('div', { className: 'ws-post-text', key: 'text' }, post.text),
                    typeof post.image === 'string' && post.image !== ''
                      ? h('img', { className: 'ws-post-image', key: 'image', src: post.image, alt: '' })
                      : null,
                  ]),
                ]))),
          ]),
        ]),
        h('div', { className: 'ws-modal-composer', key: 'composer' }, [
          h('textarea', {
            key: 'text', value: text, placeholder: t('postPlaceholder'),
            onChange: (event) => setText(event.target.value),
            onPaste: (event) => {
              const files = event.clipboardData ? event.clipboardData.files : null;
              if (files && files.length > 0) acceptFiles(files);
            },
            onKeyDown: (event) => { if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) addPost(); },
          }),
          image === '' ? null : h('div', { className: 'ws-attach-preview', key: 'preview' }, [
            h('img', { key: 'img', src: image, alt: '' }),
            h('button', { key: 'remove', type: 'button', className: 'ws-chip', onClick: () => setImage('') }, '\u00d7'),
          ]),
          h('div', { className: 'ws-composer-row', key: 'row' }, [
            h('button', { key: 'add', type: 'button', className: 'ws-chip primary', onClick: addPost }, t('publish')),
            h('button', {
              key: 'attach', type: 'button', className: 'ws-chip',
              onClick: () => { if (fileInput.current) fileInput.current.click(); },
            }, t('attach')),
            h('input', {
              key: 'file', type: 'file', accept: 'image/*', ref: fileInput, style: { display: 'none' },
              onChange: (event) => acceptFiles(event.target.files),
            }),
            h('span', { className: 'ws-composer-hint', key: 'hint' }, t('hint')),
          ]),
        ]),
      ]));
    }

    function CreateProjectModal({ onClose, onCreate, onPick, t }) {
      const [path, setPath] = useState('');
      const [busy, setBusy] = useState(false);
      const submit = () => {
        if (busy) return;
        setBusy(true);
        Promise.resolve(onCreate(path.trim())).then(onClose).catch((error) => {
          console.warn('work-space: create project failed', error);
          setBusy(false);
        });
      };
      return h('div', {
        className: 'ws-modal-mask',
        onMouseDown: (event) => { if (event.target === event.currentTarget) onClose(); },
      }, h('div', { className: 'ws-modal', style: { width: 'min(520px, 100%)' } }, [
        h('div', { className: 'ws-modal-top', key: 'top' }, [
          h('h2', { className: 'ws-modal-title', key: 'title' }, t('newProject')),
          h('button', { key: 'close', type: 'button', className: 'ws-modal-close', onClick: onClose }, '\u00d7'),
        ]),
        h('div', { className: 'ws-modal-body', key: 'body' }, [
          h('div', { className: 'ws-section', key: 'hint' }, [
            h('span', { className: 'ws-section-label', key: 'label' }, t('folderLabel')),
            h('div', { className: 'ws-section-text', key: 'text' }, t('folderHint')),
          ]),
          h('input', {
            key: 'path', type: 'text', value: path, placeholder: 'C:\\…\\MyProject',
            onChange: (event) => setPath(event.target.value),
            onKeyDown: (event) => { if (event.key === 'Enter') submit(); },
            style: { height: '32px', padding: '0 10px', borderRadius: '8px', border: '1px solid rgba(127,127,127,0.3)', background: 'transparent', color: 'inherit', font: 'inherit', fontSize: '12.5px' },
          }),
          h('div', { className: 'ws-composer-row', key: 'pick' }, [
            h('button', {
              key: 'browse', type: 'button', className: 'ws-chip',
              onClick: () => {
                if (typeof onPick !== 'function') return;
                Promise.resolve(onPick()).then((picked) => {
                  if (typeof picked === 'string' && picked !== '') setPath(picked);
                }).catch((error) => console.warn('work-space: pick failed', error));
              },
            }, t('pick')),
            h('span', { className: 'ws-composer-hint', key: 'hint' }, t('pickHint')),
          ]),
        ]),
        h('div', { className: 'ws-modal-composer', key: 'foot' }, h('div', { className: 'ws-composer-row', key: 'row' }, [
          h('button', { key: 'ok', type: 'button', className: 'ws-chip', disabled: busy, onClick: submit }, busy ? t('creating') : t('create')),
          h('button', { key: 'cancel', type: 'button', className: 'ws-chip', onClick: onClose }, t('cancel')),
        ])),
      ]));
    }

    const TRANSLATE_PROMPT = [
      'Переведи интерфейс плагина «Задачи» для DSH на мой язык.',
      '',
      'В файле tools/ws-tasks/client.js есть объект STRINGS с двумя словарями (ru, en).',
      'Нужно: добавить третий словарь с тем же набором ключей на моём языке.',
      '',
      'Правила:',
      '1. Ключи не меняй, только значения.',
      '2. Не трогай код, CSS, localStorage-ключи и id задач.',
      '3. Верни JSON-объект вида {"ключ": "перевод", …} — без пояснений.',
      '',
      'Язык: <укажи язык>',
    ].join('\n');

    function TranslateModal({ onClose, onApply, t }) {
      const [copied, setCopied] = useState(false);
      const [draft, setDraft] = useState('');
      const copy = () => {
        if (navigator.clipboard) navigator.clipboard.writeText(TRANSLATE_PROMPT).then(() => setCopied(true)).catch(() => {});
      };
      const apply = () => {
        try {
          const parsed = JSON.parse(draft);
          if (parsed && typeof parsed === 'object') onApply(parsed);
        } catch (error) {
          console.warn('work-space: bad dictionary', error);
        }
      };
      return h('div', {
        className: 'ws-modal-mask',
        onMouseDown: (event) => { if (event.target === event.currentTarget) onClose(); },
      }, h('div', { className: 'ws-modal', style: { width: 'min(640px, 100%)' } }, [
        h('div', { className: 'ws-modal-top', key: 'top' }, [
          h('h2', { className: 'ws-modal-title', key: 'title' }, t('translateTitle')),
          h('button', { key: 'close', type: 'button', className: 'ws-modal-close', onClick: onClose }, '\u00d7'),
        ]),
        h('div', { className: 'ws-modal-body', key: 'body' }, [
          h('div', { className: 'ws-section', key: 'how' }, [
            h('span', { className: 'ws-section-label', key: 'label' }, t('translateHow')),
            h('div', { className: 'ws-section-text', key: 'text' }, t('translateHint')),
          ]),
          h('textarea', {
            key: 'prompt', readOnly: true, value: TRANSLATE_PROMPT,
            style: { minHeight: '170px', resize: 'vertical', width: '100%', boxSizing: 'border-box', border: '1px solid rgba(127,127,127,0.24)', borderRadius: '10px', background: 'transparent', color: 'inherit', font: 'inherit', fontSize: '12px', padding: '10px' },
          }),
          h('textarea', {
            key: 'pack', value: draft, placeholder: t('pastePlaceholder'),
            onChange: (event) => setDraft(event.target.value),
            style: { minHeight: '120px', resize: 'vertical', width: '100%', boxSizing: 'border-box', border: '1px solid rgba(127,127,127,0.24)', borderRadius: '10px', background: 'transparent', color: 'inherit', font: 'inherit', fontSize: '12px', padding: '10px' },
          }),
        ]),
        h('div', { className: 'ws-modal-composer', key: 'foot' }, h('div', { className: 'ws-composer-row', key: 'row' }, [
          h('button', { key: 'copy', type: 'button', className: 'ws-chip', onClick: copy }, copied ? t('copied') : t('copyPrompt')),
          h('button', { key: 'apply', type: 'button', className: 'ws-chip primary', onClick: apply }, t('apply')),
          h('button', { key: 'close2', type: 'button', className: 'ws-chip', onClick: onClose }, t('close')),
        ])),
      ]));
    }

    function NewTaskModal({ onClose, onCreate, t }) {
      const [title, setTitle] = useState('');
      const [desc, setDesc] = useState('');
      const [how, setHow] = useState('');
      const submit = () => {
        if (title.trim() === '') return;
        onCreate({ title: title.trim(), desc: desc.trim(), how: how.trim() });
        onClose();
      };
      return h('div', {
        className: 'ws-modal-mask',
        onMouseDown: (event) => { if (event.target === event.currentTarget) onClose(); },
      }, h('div', { className: 'ws-modal', style: { width: 'min(560px, 100%)' } }, [
        h('div', { className: 'ws-modal-top', key: 'top' }, [
          h('h2', { className: 'ws-modal-title', key: 'title' }, t('newTask')),
          h('button', { key: 'close', type: 'button', className: 'ws-modal-close', onClick: onClose }, '\u00d7'),
        ]),
        h('div', { className: 'ws-modal-body', key: 'body' }, [
          h('input', {
            key: 'title', type: 'text', value: title, placeholder: t('taskTitle'),
            onChange: (event) => setTitle(event.target.value),
            style: { height: '32px', padding: '0 10px', borderRadius: '8px', border: '1px solid rgba(127,127,127,0.3)', background: 'transparent', color: 'inherit', font: 'inherit', fontSize: '12.5px' },
          }),
          h('textarea', {
            key: 'desc', value: desc, placeholder: t('taskDesc'),
            onChange: (event) => setDesc(event.target.value),
            style: { minHeight: '80px', width: '100%', boxSizing: 'border-box', border: '1px solid rgba(127,127,127,0.24)', borderRadius: '10px', background: 'transparent', color: 'inherit', font: 'inherit', fontSize: '12.5px', padding: '8px 10px' },
          }),
          h('textarea', {
            key: 'how', value: how, placeholder: t('taskHow'),
            onChange: (event) => setHow(event.target.value),
            style: { minHeight: '80px', width: '100%', boxSizing: 'border-box', border: '1px solid rgba(127,127,127,0.24)', borderRadius: '10px', background: 'transparent', color: 'inherit', font: 'inherit', fontSize: '12.5px', padding: '8px 10px' },
          }),
        ]),
        h('div', { className: 'ws-modal-composer', key: 'foot' }, h('div', { className: 'ws-composer-row', key: 'row' }, [
          h('button', { key: 'ok', type: 'button', className: 'ws-chip primary', onClick: submit }, t('save')),
          h('button', { key: 'cancel', type: 'button', className: 'ws-chip', onClick: onClose }, t('cancel')),
        ])),
      ]));
    }

    function CommitModal({ commit, onClose, board, t, onOpenTask }) {
      const [copied, setCopied] = useState(false);
      const [shaCopied, setShaCopied] = useState(false);
      const [expanded, setExpanded] = useState(false);
      const sha = String(commit.sha || '');
      const message = String(commit.message || '');
      const task = board.find((item) => item.code && message.indexOf(item.code) >= 0);
      const files = Array.isArray(commit.files) ? commit.files : [];
      const copy = () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText('git revert ' + sha).then(() => setCopied(true)).catch(() => {});
        }
      };
      const copySha = () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(sha).then(() => setShaCopied(true)).catch(() => {});
        }
      };
      return h('div', {
        className: 'ws-modal-mask',
        onMouseDown: (event) => { if (event.target === event.currentTarget) onClose(); },
      }, h('div', { className: 'ws-modal', style: { width: 'min(620px, 100%)' } }, [
        h('div', { className: 'ws-modal-top', key: 'top' }, [
          h('div', { key: 'titles' }, [
            h('div', { className: 'ws-modal-code', key: 'sha' }, sha.slice(0, 10)),
            h('h2', { className: 'ws-modal-title', key: 'title' }, message.split('\n')[0]),
          ]),
          h('button', { key: 'close', type: 'button', className: 'ws-modal-close', onClick: onClose }, '\u00d7'),
        ]),
        h('div', { className: 'ws-modal-body', key: 'body' }, [
          h('div', { className: 'ws-section', key: 'meta' }, [
            h('div', { className: 'ws-commit-meta', key: 'row' }, [
              h('span', { key: 'a' }, t('author') + ': ' + String(commit.author || '\u2014')),
              h('span', { key: 'd' }, formatDate(new Date(commit.date || 0).getTime())),
              commit.branch ? h('span', { key: 'b' }, t('branch') + ': ' + String(commit.branch)) : null,
            ]),
          ]),
          message.split('\n').length > 1
            ? h('div', { className: 'ws-section', key: 'body' }, [
                h('span', { className: 'ws-section-label', key: 'label' }, t('commitDetails')),
                h('div', { className: 'ws-section-text', key: 'text' }, message.split('\n').slice(1).join('\n')),
              ])
            : null,
          files.length > 0
            ? h('div', { className: 'ws-section', key: 'files' }, [
                h('span', { className: 'ws-section-label', key: 'label' }, t('files') + ' (' + files.length + ')'),
                h('div', { key: 'list' }, files.map((file, index) => {
                  const path = typeof file === 'string' ? file : String(file.path || '');
                  const add = typeof file === 'object' && file !== null ? Number(file.add) : 0;
                  const del = typeof file === 'object' && file !== null ? Number(file.del) : 0;
                  return h('div', { className: 'ws-file-row', key: String(index) }, [
                    h('span', { key: 'path' }, path),
                    h('span', { key: 'stat' }, [
                      h('span', { className: 'ws-plus', key: 'a' }, add ? '+' + add : ''),
                      h('span', { key: 'sep' }, ' '),
                      h('span', { className: 'ws-minus', key: 'd' }, del ? '-' + del : ''),
                    ]),
                  ]);
                })),
              ])
            : null,
          typeof commit.diff === 'string' && commit.diff !== ''
            ? h('div', { className: 'ws-section', key: 'diff' }, [
                h('span', { className: 'ws-section-label', key: 'label' }, 'Diff'),
                h('pre', { className: 'ws-diff', key: 'pre' },
                  expanded ? commit.diff : commit.diff.split('\n').slice(0, 8).join('\n')),
                commit.diff.split('\n').length > 8
                  ? h('button', {
                      className: 'ws-diff-more', key: 'more', type: 'button',
                      onClick: () => setExpanded(!expanded),
                    }, expanded ? t('showLess') : t('showAll'))
                  : null,
              ])
            : null,
          h('div', { className: 'ws-section', key: 'task' }, [            h('span', { className: 'ws-section-label', key: 'label' }, t('openTask')),
            task === undefined
              ? h('div', { className: 'ws-section-text', key: 'none' }, t('noTask'))
              : h('button', {
                  key: 'open', type: 'button', className: 'ws-chip primary',
                  onClick: () => { onClose(); if (typeof onOpenTask === 'function') onOpenTask(task); },
                }, (task.code || '') + ' ' + task.title),
          ]),
        ]),
        h('div', { className: 'ws-modal-composer', key: 'foot' }, h('div', { className: 'ws-composer-row', key: 'row' }, [
          h('button', { key: 'sha', type: 'button', className: 'ws-chip', onClick: copySha }, shaCopied ? t('copiedCommand') : t('copySha')),
          h('button', { key: 'copy', type: 'button', className: 'ws-chip', onClick: copy }, copied ? t('copiedCommand') : t('copyRevert')),
          h('button', { key: 'close2', type: 'button', className: 'ws-chip', onClick: onClose }, t('close')),
        ])),
      ]));
    }

    function ConfirmModal({ title, text, confirmLabel, onConfirm, onClose, t }) {
      return h('div', {
        className: 'ws-modal-mask',
        onMouseDown: (event) => { if (event.target === event.currentTarget) onClose(); },
      }, h('div', { className: 'ws-modal', style: { width: 'min(460px, 100%)' } }, [
        h('div', { className: 'ws-modal-top', key: 'top' }, [
          h('h2', { className: 'ws-modal-title', key: 'title' }, title),
          h('button', { key: 'close', type: 'button', className: 'ws-modal-close', onClick: onClose }, '\u00d7'),
        ]),
        h('div', { className: 'ws-modal-body', key: 'body' }, [
          h('div', { className: 'ws-section-text', key: 'text' }, text),
        ]),
        h('div', { className: 'ws-modal-composer', key: 'foot' }, h('div', { className: 'ws-composer-row', key: 'row' }, [
          h('button', { key: 'ok', type: 'button', className: 'ws-chip danger', onClick: onConfirm }, confirmLabel),
          h('button', { key: 'cancel', type: 'button', className: 'ws-chip', onClick: onClose }, t('cancel')),
        ])),
      ]));
    }

    // ---------- devlog ----------

    const DEVLOG_CHANNELS_KEY = 'workspace.devlog.channels';
    const DEVLOG_TOKEN_KEY = 'workspace.devlog.token';
    const DEVLOG_FEED_KEY = 'workspace.devlog.feed';
    const DEVLOG_TEMPLATES_KEY = 'workspace.devlog.templates';
    const DEVLOG_DEEPSEEK_KEY = 'workspace.devlog.deepseek';
    const DEVLOG_TARGET_KEY = 'workspace.devlog.target';
    const DEVLOG_PUBLISHED_KEY = 'workspace.devlog.published';
    const DEVLOG_HIDDEN_KEY = 'workspace.devlog.hidden';

    const KINDS = [
      { id: 'devlog', label: 'kindDevlog' },
      { id: 'stream', label: 'kindStream' },
      { id: 'announce', label: 'kindAnnounce' },
    ];

    const LANGS = [
      { code: 'en', label: 'English' },
      { code: 'es', label: 'Español' },
      { code: 'de', label: 'Deutsch' },
      { code: 'fr', label: 'Français' },
      { code: 'pt', label: 'Português' },
      { code: 'it', label: 'Italiano' },
      { code: 'tr', label: 'Türkçe' },
      { code: 'hi', label: 'हिन्दी' },
      { code: 'ar', label: 'العربية' },
      { code: 'zh', label: '中文' },
      { code: 'ja', label: '日本語' },
      { code: 'id', label: 'Bahasa Indonesia' },
    ];

    function newChannel() {
      return {
        id: 'ch-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5),
        name: '',
        platform: 'telegram',
        kind: 'devlog',
        lang: 'ru',
        chatId: '',
        threadId: '',
        webhook: '',
      };
    }

    function DevlogSettings({ channels, token, deepseek, target, onSave, onClose, t }) {
      const [draft, setDraft] = useState(channels.map((item) => ({ ...item })));
      const [secret, setSecret] = useState(token);
      const [apiKey, setApiKey] = useState(deepseek);
      const [lang, setLang] = useState(target);
      const [bulk, setBulk] = useState('');

      const patch = (index, key, value) => {
        setDraft(draft.map((item, position) => (position === index ? { ...item, [key]: value } : item)));
      };

      const field = (index, key, placeholder, width) => h('input', {
        key: key,
        type: 'text',
        value: String(draft[index][key] || ''),
        placeholder: placeholder,
        onChange: (event) => patch(index, key, event.target.value),
        style: { width: width, height: '26px', padding: '0 7px', borderRadius: '7px', border: '1px solid rgba(127,127,127,0.24)', background: 'transparent', color: 'inherit', font: 'inherit', fontSize: '11.5px' },
      });

      const select = (index, key, options) => h('select', {
        key: key,
        value: draft[index][key],
        onChange: (event) => patch(index, key, event.target.value),
        style: { height: '26px', borderRadius: '7px', border: '1px solid rgba(127,127,127,0.24)', background: 'transparent', color: 'inherit', font: 'inherit', fontSize: '11.5px' },
      }, options.map((option) => h('option', { key: option.value, value: option.value }, option.label)));

      return h('div', {
        className: 'ws-modal-mask',
        onMouseDown: (event) => { if (event.target === event.currentTarget) onClose(); },
      }, h('div', { className: 'ws-modal', style: { width: 'min(860px, 100%)' } }, [
        h('div', { className: 'ws-modal-top', key: 'top' }, [
          h('h2', { className: 'ws-modal-title', key: 'title' }, t('settings')),
          h('button', { key: 'close', type: 'button', className: 'ws-modal-close', onClick: onClose }, '\u00d7'),
        ]),
        h('div', { className: 'ws-modal-body', key: 'body' }, [
          h('label', { className: 'ws-section', key: 'token' }, [
            h('span', { className: 'ws-section-label', key: 'label' }, t('botToken')),
            h('input', {
              key: 'input', type: 'password', value: secret,
              onChange: (event) => setSecret(event.target.value),
              placeholder: '123456:AA...',
              style: { height: '30px', padding: '0 9px', borderRadius: '8px', border: '1px solid rgba(127,127,127,0.24)', background: 'transparent', color: 'inherit', font: 'inherit', fontSize: '12px' },
            }),
          ]),
          h('label', { className: 'ws-section', key: 'deepseek' }, [
            h('span', { className: 'ws-section-label', key: 'label' }, t('deepseekKey')),
            h('input', {
              key: 'input', type: 'password', value: apiKey,
              onChange: (event) => setApiKey(event.target.value),
              placeholder: 'sk-...',
              style: { height: '30px', padding: '0 9px', borderRadius: '8px', border: '1px solid rgba(127,127,127,0.24)', background: 'transparent', color: 'inherit', font: 'inherit', fontSize: '12px' },
            }),
          ]),
          h('label', { className: 'ws-section', key: 'target' }, [
            h('span', { className: 'ws-section-label', key: 'label' }, t('targetLang')),
            h('select', {
              key: 'select', value: lang,
              onChange: (event) => setLang(event.target.value),
              style: { height: '30px', borderRadius: '8px', border: '1px solid rgba(127,127,127,0.24)', background: 'transparent', color: 'inherit', font: 'inherit', fontSize: '12px' },
            }, LANGS.map((item) => h('option', { key: item.code, value: item.code }, item.label))),
          ]),
          h('div', { className: 'ws-section', key: 'bulk' }, [
            h('span', { className: 'ws-section-label', key: 'label' }, t('importJson')),
            h('div', { className: 'ws-section-text', key: 'hint' }, t('importJsonHint')),
            h('textarea', {
              key: 'bulk', value: bulk,
              onChange: (event) => setBulk(event.target.value),
              style: { minHeight: '70px', width: '100%', boxSizing: 'border-box', border: '1px solid rgba(127,127,127,0.24)', borderRadius: '10px', background: 'transparent', color: 'inherit', font: 'inherit', fontSize: '11.5px', padding: '8px 10px' },
            }),
            h('button', {
              key: 'addFromJson', type: 'button', className: 'ws-chip',
              onClick: () => {
                try {
                  const list = JSON.parse(bulk);
                  if (Array.isArray(list)) {
                    setDraft(draft.concat(list.map((item) => ({ ...newChannel(), ...item }))));
                    setBulk('');
                  }
                } catch (error) {
                  console.warn('work-space: bad channels json', error);
                }
              },
            }, t('addChannel')),
          ]),
          h('div', { className: 'ws-section', key: 'channels' }, [
            h('span', { className: 'ws-section-label', key: 'label' }, t('channelsSettings') + ' (' + draft.length + ')'),
            ...draft.map((item, index) => h('div', {
              key: item.id,
              style: { display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center', padding: '6px 0', borderBottom: '1px dashed rgba(127,127,127,0.2)' },
            }, [
              field(index, 'name', t('name'), '120px'),
              select(index, 'platform', [{ value: 'telegram', label: 'Telegram' }, { value: 'discord', label: 'Discord' }]),
              select(index, 'kind', KINDS.map((kind) => ({ value: kind.id, label: t(kind.label) }))),
              select(index, 'lang', [{ value: 'ru', label: 'RU' }, { value: 'en', label: 'EN' }, { value: 'any', label: '\u2014' }]),
              field(index, 'chatId', t('chatId'), '120px'),
              field(index, 'threadId', t('threadId'), '70px'),
              field(index, 'webhook', t('webhook'), '260px'),
              h('button', {
                key: 'del', type: 'button', className: 'ws-chip danger',
                onClick: () => setDraft(draft.filter((row) => row.id !== item.id)),
              }, '\u00d7'),
            ])),
            h('button', {
              key: 'add', type: 'button', className: 'ws-chip',
              onClick: () => setDraft(draft.concat([newChannel()])),
            }, '+ ' + t('addChannel')),
          ]),
        ]),
        h('div', { className: 'ws-modal-composer', key: 'foot' }, h('div', { className: 'ws-composer-row', key: 'row' }, [
          h('button', {
            key: 'save', type: 'button', className: 'ws-chip primary',
            onClick: () => onSave(draft, secret, apiKey, lang),
          }, t('saveSettings')),
          h('button', { key: 'cancel', type: 'button', className: 'ws-chip', onClick: onClose }, t('cancel')),
        ])),
      ]));
    }

    const ICONS = {
      history: ['M3 4v5h5', 'M3.5 9a9 9 0 1 1 2 7.5', 'M12 7v5l4 2'],
      star: ['M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.1 5.9-.9z'],
      bookmark: ['M7 4h10v16l-5-3.4L7 20z'],
      gear: ['M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z', 'M19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2 1.2L10 21h4l.5-2.6a7 7 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2z'],
      eye: ['M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z', 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'],
      paperclip: ['M20 11l-8.5 8.5a5 5 0 0 1-7-7L13 4a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-3-3L15 6'],
      trash: ['M4 7h16', 'M10 7V5h4v2', 'M6 7l1 13h10l1-13'],
      image: ['M4 5h16v14H4z', 'M4 15l4-4 3 3 3-3 6 6', 'M9 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'],
    };

    function Icon({ name, size }) {
      const paths = ICONS[name] || ICONS.star;
      return h('svg', {
        viewBox: '0 0 24 24', width: size || 16, height: size || 16,
        fill: 'none', stroke: 'currentColor', strokeWidth: 1.6,
        strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true',
        style: { display: 'block' },
      }, paths.map((d, index) => h('path', { key: String(index), d })));
    }
    function escapeHtml(value) {
      return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    /** Мини-конвертер Markdown в HTML для превью и Telegram. */
    function mdToHtml(source) {
      let text = escapeHtml(source);
      text = text.replace(/```([\s\S]*?)```/g, (match, code) => '<pre>' + code + '</pre>');
      text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
      text = text.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
      text = text.replace(/__([^_]+)__/g, '<b>$1</b>');
      text = text.replace(/~~([^~]+)~~/g, '<s>$1</s>');
      text = text.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2">$1</a>');
      text = text.replace(/^### (.*)$/gm, '<b>$1</b>');
      text = text.replace(/^## (.*)$/gm, '<b>$1</b>');
      text = text.replace(/^# (.*)$/gm, '<b>$1</b>');
      text = text.replace(/^- (.*)$/gm, '\u2022 $1');
      return text;
    }
    /** Превью: тот же Markdown, но с переносами строк для браузера. */
    function mdPreview(source) {
      return mdToHtml(source).replace(/\n/g, '<br>');
    }

    function dataUrlToBlob(dataUrl) {
      return fetch(dataUrl).then((response) => response.blob());
    }

    function DevlogPage({ t, board, statusOf, imagesOf }) {
      const [channels, setChannels] = useState(() => readJSON(DEVLOG_CHANNELS_KEY, []));
      const [token, setToken] = useState(() => readText(DEVLOG_TOKEN_KEY));
      const [deepseek, setDeepseek] = useState(() => readText(DEVLOG_DEEPSEEK_KEY));
      const [target, setTarget] = useState(() => readText(DEVLOG_TARGET_KEY) || 'en');
      const [templates, setTemplates] = useState(() => readJSON(DEVLOG_TEMPLATES_KEY, []));
      const [published, setPublished] = useState(() => readJSON(DEVLOG_PUBLISHED_KEY, {}));
      const [hidden, setHidden] = useState(() => readJSON(DEVLOG_HIDDEN_KEY, []));
      const [activeTaskId, setActiveTaskId] = useState('');
      const [hideAfter, setHideAfter] = useState(false);
      const [preview, setPreview] = useState(false);
      const [historyOpen, setHistoryOpen] = useState(false);
      const [openGroups, setOpenGroups] = useState({ doing: true, done: false, published: false });
      const [feed, setFeed] = useState(() => readJSON(DEVLOG_FEED_KEY, []));
      const [kind, setKind] = useState('devlog');
      const [ru, setRu] = useState('');
      const [en, setEn] = useState('');
      const [images, setImages] = useState([]);
      const [picked, setPicked] = useState([]);
      const [settingsOpen, setSettingsOpen] = useState(false);
      const [templatesOpen, setTemplatesOpen] = useState(false);
      const [tplOpen, setTplOpen] = useState(false);
      const [tplName, setTplName] = useState('');
      const [busy, setBusy] = useState(false);
      const [translating, setTranslating] = useState(false);
      const [note, setNote] = useState('');
      const fileInput = useRef(null);
      const ruRef = useRef(null);
      const enRef = useRef(null);
      const [focusField, setFocusField] = useState('ru');

      const eligible = channels.filter((item) => item.kind === kind);

      const allTasks = Array.isArray(board) ? board : [];
      const statusTask = (task) => (typeof statusOf === 'function' ? statusOf(task) : '');
      const isPublished = (task) => Object.prototype.hasOwnProperty.call(published, task.id);
      const groups = [
        { id: 'doing', label: t('groupDoing'), items: allTasks.filter((task) => statusTask(task) === 'doing' && !isPublished(task) && hidden.indexOf(task.id) < 0) },
        { id: 'done', label: t('groupDone'), items: allTasks.filter((task) => statusTask(task) === 'done' && !isPublished(task) && hidden.indexOf(task.id) < 0) },
        { id: 'published', label: t('groupPublished'), items: allTasks.filter((task) => isPublished(task)) },
      ];

      const fillFromTask = (task) => {
        const status = typeof statusOf === 'function' ? statusOf(task) : '';
        const lines = [];
        lines.push((task.code ? task.code + ' \u2014 ' : '') + task.title);
        if (task.desc) lines.push('', task.desc);
        lines.push('', status === 'done' ? 'Готово' : 'В работе');
        setRu(lines.join('\n'));
        setKind('devlog');
        setActiveTaskId(task.id);
        const found = typeof imagesOf === 'function' ? imagesOf(task) : [];
        if (found.length > 0) {
          setImages((current) => {
            const next = current.slice();
            for (const src of found) if (next.indexOf(src) < 0) next.push(src);
            return next.slice(0, 10);
          });
        }
      };

      useEffect(() => {
        setPicked(eligible.map((item) => item.id));
      }, [kind, channels.length]);

      const toggle = (id) => {
        setPicked(picked.indexOf(id) >= 0 ? picked.filter((item) => item !== id) : picked.concat([id]));
      };

      const saveSettings = (nextChannels, nextToken, nextKey, nextTarget) => {
        setChannels(nextChannels);
        writeJSON(DEVLOG_CHANNELS_KEY, nextChannels);
        setToken(nextToken);
        writeText(DEVLOG_TOKEN_KEY, nextToken);
        setDeepseek(nextKey);
        writeText(DEVLOG_DEEPSEEK_KEY, nextKey);
        setSettingsOpen(false);
      };

      const acceptFile = (files) => {
        const file = files && files[0];
        if (!file || typeof file.type !== 'string' || !file.type.startsWith('image/')) return;
        const reader = new FileReader();
        reader.onload = () => {
          const raw = typeof reader.result === 'string' ? reader.result : '';
          if (raw === '') return;
          const img = new Image();
          img.onload = () => {
            const max = 1600;
            const scale = Math.min(1, max / Math.max(img.width, img.height));
            const canvas = document.createElement('canvas');
            canvas.width = Math.max(1, Math.round(img.width * scale));
            canvas.height = Math.max(1, Math.round(img.height * scale));
            const context = canvas.getContext('2d');
            if (context === null) return;
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
            const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
            setImages((current) => current.concat([dataUrl]).slice(0, 10));
          };
          img.src = raw;
        };
        reader.readAsDataURL(file);
      };

      const send = async () => {
        if (busy) return;
        if (ru.trim() === '' && en.trim() === '') return;
        setBusy(true);
        setNote('');
        const chosen = eligible.filter((item) => picked.indexOf(item.id) >= 0);
        const results = [];
        const blobs = [];
        for (const src of images) {
          try { blobs.push(await dataUrlToBlob(src)); } catch (error) { /* skip broken image */ }
        }
        for (const channel of chosen) {
          const text = channel.lang === 'en' ? (en.trim() !== '' ? en.trim() : ru.trim()) : (ru.trim() !== '' ? ru.trim() : en.trim());
          try {
            if (channel.platform === 'telegram') {
              if (token === '') throw new Error('no token');
              const base = 'https://api.telegram.org/bot' + token;
              const thread = channel.threadId !== '' && channel.threadId !== undefined ? Number(channel.threadId) : null;
              let response;
              if (blobs.length === 0) {
                const body = { chat_id: String(channel.chatId || ''), text: mdToHtml(text), parse_mode: 'HTML' };
                if (thread !== null) body.message_thread_id = thread;
                response = await fetch(base + '/sendMessage', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(body),
                });
              } else if (blobs.length === 1) {
                const form = new FormData();
                form.append('chat_id', String(channel.chatId || ''));
                if (thread !== null) form.append('message_thread_id', String(thread));
                form.append('caption', mdToHtml(text.slice(0, 1024)));
                form.append('parse_mode', 'HTML');
                form.append('photo', blobs[0], 'photo.jpg');
                response = await fetch(base + '/sendPhoto', { method: 'POST', body: form });
              } else {
                const form = new FormData();
                form.append('chat_id', String(channel.chatId || ''));
                if (thread !== null) form.append('message_thread_id', String(thread));
                const media = blobs.map((blob, index) => ({
                  type: 'photo',
                  media: 'attach://photo' + index,
                  ...(index === 0 ? { caption: mdToHtml(text.slice(0, 1024)), parse_mode: 'HTML' } : {}),
                }));
                form.append('media', JSON.stringify(media));
                blobs.forEach((blob, index) => form.append('photo' + index, blob, 'photo' + index + '.jpg'));
                response = await fetch(base + '/sendMediaGroup', { method: 'POST', body: form });
              }
              const data = await response.json();
              if (!response.ok || !data || data.ok !== true) throw new Error((data && data.description) || ('HTTP ' + response.status));
              results.push({ name: channel.name, ok: true });
            } else {
              if (!channel.webhook) throw new Error('no webhook');
              let response;
              if (blobs.length === 0) {
                response = await fetch(channel.webhook + '?wait=true', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ content: text }),
                });
              } else {
                const form = new FormData();
                form.append('payload_json', JSON.stringify({ content: text }));
                blobs.forEach((blob, index) => form.append('files[' + index + ']', blob, 'photo' + index + '.jpg'));
                response = await fetch(channel.webhook + '?wait=true', { method: 'POST', body: form });
              }
              if (!response.ok) throw new Error('HTTP ' + response.status);
              results.push({ name: channel.name, ok: true });
            }
          } catch (error) {
            results.push({ name: channel.name, ok: false, error: error && error.message ? error.message : String(error) });
          }
        }
        const anyOk = results.some((item) => item.ok);
        if (anyOk && activeTaskId !== '' && hideAfter) {
          const nextPublished = { ...published, [activeTaskId]: Date.now() };
          setPublished(nextPublished);
          writeJSON(DEVLOG_PUBLISHED_KEY, nextPublished);
          const nextHidden = hidden.indexOf(activeTaskId) >= 0 ? hidden : hidden.concat([activeTaskId]);
          setHidden(nextHidden);
          writeJSON(DEVLOG_HIDDEN_KEY, nextHidden);
          setHideAfter(false);
        }
        const entry = { at: Date.now(), kind, ru, en, results };
        const nextFeed = [entry].concat(feed).slice(0, 50);
        setFeed(nextFeed);
        writeJSON(DEVLOG_FEED_KEY, nextFeed);
        setBusy(false);
        setNote(results.length === 0 ? t('noChannels') : results.every((item) => item.ok) ? t('sent') : t('someFailed'));
      };
      const translate = () => {
        if (translating) return;
        if (deepseek === '') { setNote(t('needKey')); return; }
        if (ru.trim() === '') return;
        setTranslating(true);
        const language = LANGS.find((item) => item.code === target) || LANGS[0];
        fetch('https://api.deepseek.com/chat/completions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + deepseek },
          body: JSON.stringify({
            model: 'deepseek-flash',
            temperature: 0.2,
            messages: [
              { role: 'system', content: 'Translate the user text to ' + language.label + ' for a social post. Keep line breaks and emoji. Reply with the translation only.' },
              { role: 'user', content: ru },
            ],
          }),
        }).then((response) => response.json()).then((data) => {
          if (data && data.error && data.error.message) {
            setNote(String(data.error.message));
            setTranslating(false);
            return;
          }
          const choice = data && data.choices && data.choices[0];
          const text = choice && choice.message && typeof choice.message.content === 'string' ? choice.message.content.trim() : '';
          if (text !== '') {
            setEn(text);
          } else {
            setNote(t('someFailed'));
          }
          setTranslating(false);
        }).catch((error) => {
          console.warn('work-space: translate failed', error);
          setTranslating(false);
          setNote(t('someFailed'));
        });
      };

      const saveTemplate = () => {
        const name = tplName.trim();
        if (name === '') { setNote(t('templateName')); return; }
        const next = templates.concat([{ id: 'tpl-' + Date.now().toString(36), name, kind, ru, en }]);
        setTemplates(next);
        writeJSON(DEVLOG_TEMPLATES_KEY, next);
        setTplName('');
        setTplOpen(false);
        setNote(t('templateSaved'));
      };

      const applyTemplate = (template) => {
        setKind(template.kind);
        setRu(template.ru || '');
        setEn(template.en || '');
        setTemplatesOpen(false);
      };

      const kindChips = KINDS.map((item) => h('button', {
        key: item.id, type: 'button',
        className: 'ws-chip' + (kind === item.id ? ' primary' : ''),
        onClick: () => setKind(item.id),
      }, t(item.label)));

      const channelChips = eligible.map((channel) => h('label', {
        key: channel.id, className: 'ws-channel',
      }, [
        h('input', { key: 'check', type: 'checkbox', checked: picked.indexOf(channel.id) >= 0, onChange: () => toggle(channel.id) }),
        h('span', { key: 'name' }, channel.name || channel.id),
      ]));

      const wrapMarkdown = (prefix, suffix, placeholder) => {
        const isEn = focusField === 'en' && kind === 'devlog';
        const ref = isEn ? enRef : ruRef;
        const value = isEn ? en : ru;
        const apply = isEn ? setEn : setRu;
        const element = ref.current;
        if (!element) return;
        const start = typeof element.selectionStart === 'number' ? element.selectionStart : value.length;
        const end = typeof element.selectionEnd === 'number' ? element.selectionEnd : start;
        const selected = value.slice(start, end) || placeholder || '';
        const next = value.slice(0, start) + prefix + selected + suffix + value.slice(end);
        apply(next);
        window.requestAnimationFrame(() => {
          element.focus();
          const position = start + prefix.length + selected.length;
          if (typeof element.setSelectionRange === 'function') element.setSelectionRange(position, position);
        });
      };

      const mdButtons = [
        { key: 'b', glyph: 'B', prefix: '**', suffix: '**', placeholder: 'текст', title: 'bold' },
        { key: 'i', glyph: 'I', prefix: '*', suffix: '*', placeholder: 'курсив', title: 'italic' },
        { key: 's', glyph: 'S', prefix: '~~', suffix: '~~', placeholder: 'текст', title: 'strike' },
        { key: 'code', glyph: '</>', prefix: '`', suffix: '`', placeholder: 'код', title: 'code' },
        { key: 'link', glyph: 'A', prefix: '[', suffix: '](https://)', placeholder: 'ссылка', title: 'link' },
        { key: 'list', glyph: '\u2022', prefix: '- ', suffix: '', placeholder: 'пункт', title: 'list' },
        { key: 'head', glyph: 'H', prefix: '## ', suffix: '', placeholder: 'Заголовок', title: 'heading' },
      ];

      const mdToolbar = h('div', { className: 'ws-editor-toolbar', key: 'md' }, mdButtons.map((button) => h('button', {
        key: button.key, type: 'button', className: 'ws-md-btn', title: button.title,
        onMouseDown: (event) => { event.preventDefault(); wrapMarkdown(button.prefix, button.suffix, button.placeholder); },
      }, button.glyph)));

      const iconBtn = (key, glyph, title, onClick) => h('button', {
        key, type: 'button', className: 'ws-icon-btn', title, onClick,
      }, glyph);

      const composer = h('div', { className: 'ws-composer-card', key: 'composer' }, [
        h('div', { className: 'ws-composer-top', key: 'top' }, [
          h('div', { className: 'ws-segment', key: 'kinds' }, kindChips),
          h('div', { className: 'ws-toolbar', key: 'tools' }, [
            iconBtn('history', h(Icon, { name: 'history' }), t('history'), () => setHistoryOpen(true)),
            iconBtn('templates', h(Icon, { name: 'star' }), t('templates'), () => setTemplatesOpen(true)),
            iconBtn('saveTpl', h(Icon, { name: 'bookmark' }), t('saveTemplate'), () => setTplOpen(true)),
            iconBtn('settings', h(Icon, { name: 'gear' }), t('settings'), () => setSettingsOpen(true)),
          ]),
        ]),
        h('div', { className: 'ws-section', key: 'tasks' }, [
          h('span', { className: 'ws-section-label', key: 'label' }, t('tasksSection')),
          h('div', { className: 'ws-spoiler-row', key: 'row' }, groups.map((group) => h('button', {
            key: group.id, type: 'button',
            className: 'ws-spoiler-head' + (openGroups[group.id] ? ' open' : ''),
            onClick: () => setOpenGroups({ ...openGroups, [group.id]: !openGroups[group.id] }),
          }, [
            h('span', { key: 'label' }, (openGroups[group.id] ? '\u25be ' : '\u25b8 ') + group.label),
            h('span', { className: 'ws-spoiler-count', key: 'count' }, String(group.items.length)),
          ]))),
          ...groups.map((group) => (openGroups[group.id] ? h('div', { className: 'ws-task-list', key: 'list-' + group.id }, group.items.length === 0
            ? h('span', { className: 'ws-composer-hint', key: 'empty' }, t('emptyList'))
            : group.items.map((task) => {
              const previewImage = typeof imageOf === 'function' ? imageOf(task) : '';
              return h('button', {
                key: task.id, type: 'button',
                className: 'ws-task-item' + (task.id === activeTaskId ? ' active' : ''),
                onClick: () => fillFromTask(task),
              }, [
                previewImage !== ''
                  ? h('img', { className: 'ws-task-thumb', key: 'img', src: previewImage, alt: '' })
                  : h('span', { className: 'ws-task-thumb ws-task-thumb-empty', key: 'ph' }, h(Icon, { name: 'image', size: 14 })),
                h('span', { key: 'title' }, (task.code ? task.code + ' ' : '') + task.title),
              ]);
            })) : null)),
        ]),
        h('div', { className: 'ws-editor', key: 'editor' }, [
          h('div', { className: 'ws-editor-head', key: 'ruhead' }, [
            h('span', { className: 'ws-section-label', key: 'label' }, t('postRu')),
            h('div', { className: 'ws-head-tools', key: 'tools' }, [
              mdToolbar,
              iconBtn('preview', h(Icon, { name: 'eye' }), t('preview'), () => setPreview(!preview)),
            ]),
          ]),
          preview
            ? h('div', { className: 'ws-preview', key: 'rup', dangerouslySetInnerHTML: { __html: mdPreview(ru) } })
            : h('textarea', {
                key: 'ru', value: ru, placeholder: t('postRu'), ref: ruRef, onFocus: () => setFocusField('ru'),
                onChange: (event) => setRu(event.target.value),
                onPaste: (event) => {
                  const files = event.clipboardData ? event.clipboardData.files : null;
                  if (files && files.length > 0) { event.preventDefault(); acceptFile(files); }
                },
                style: { minHeight: '110px' },
              }),
          kind === 'devlog' ? h('div', { className: 'ws-editor-head', key: 'enhead' }, [
            h('span', { className: 'ws-section-label', key: 'label' }, t('postEn')),
            h('button', {
              key: 'translate', type: 'button', className: 'ws-chip',
              disabled: translating, onClick: translate,
            }, translating ? t('translating') : t('translate')),
          ]) : null,
          kind === 'devlog' ? h('textarea', {
            key: 'en', value: en, placeholder: t('postEn'), ref: enRef, onFocus: () => setFocusField('en'),
            onChange: (event) => setEn(event.target.value),
            style: { minHeight: '80px' },
          }) : null,
        ]),
        images.length === 0 ? null : h('div', { className: 'ws-gallery', key: 'gallery' }, images.map((src, index) => h('div', { className: 'ws-gallery-item', key: String(index) }, [
          h('img', { key: 'img', src: src, alt: '' }),
          h('button', {
            key: 'rm', type: 'button', className: 'ws-gallery-remove', title: t('removeImage'),
            onClick: () => setImages((current) => current.filter((item, position) => position !== index)),
          }, '\u00d7'),
        ]))),
        h('div', { className: 'ws-composer-row', key: 'channels' },
          eligible.length === 0 ? h('span', { className: 'ws-composer-hint' }, t('noChannels')) : channelChips),
        h('div', { className: 'ws-composer-row', key: 'actions' }, [
          h('button', { key: 'send', type: 'button', className: 'ws-chip primary ws-publish', disabled: busy, onClick: send }, busy ? t('publishing') : t('publish')),
          iconBtn('attach', h(Icon, { name: 'paperclip' }), t('attach'), () => { if (fileInput.current) fileInput.current.click(); }),
          h('input', {
            key: 'file', type: 'file', accept: 'image/*', ref: fileInput, style: { display: 'none' },
            onChange: (event) => acceptFile(event.target.files),
          }),
          h('label', { className: 'ws-hide-check', key: 'hide' }, [
            h('input', {
              key: 'check', type: 'checkbox', checked: hideAfter,
              disabled: activeTaskId === '',
              onChange: (event) => setHideAfter(event.target.checked),
            }),
            h('span', { key: 'text' }, t('hideFromSuggestions')),
          ]),
          note === '' ? null : h('span', { key: 'note', className: 'ws-composer-hint' }, note),
        ]),
      ]);
      const historyModal = !historyOpen ? null : h('div', {
        className: 'ws-modal-mask',
        onMouseDown: (event) => { if (event.target === event.currentTarget) setHistoryOpen(false); },
      }, h('div', { className: 'ws-modal', style: { width: 'min(720px, 100%)' } }, [
        h('div', { className: 'ws-modal-top', key: 'top' }, [
          h('h2', { className: 'ws-modal-title', key: 'title' }, t('history')),
          h('button', { key: 'close', type: 'button', className: 'ws-modal-close', onClick: () => setHistoryOpen(false) }, '\u00d7'),
        ]),
        h('div', { className: 'ws-modal-body', key: 'body' }, feed.length === 0
          ? h('div', { className: 'ws-post-empty' }, t('history') + ': \u2014')
          : feed.map((entry, index) => h('div', { key: String(index), className: 'ws-post' }, [
              h('div', { className: 'ws-post-head', key: 'head' }, [
                h('span', { className: 'ws-sha', key: 'kind' }, t((KINDS.find((item) => item.id === entry.kind) || KINDS[0]).label)),
                h('span', { className: 'ws-post-date', key: 'date' }, formatDate(entry.at)),
              ]),
              h('div', {
                key: 'text', className: 'ws-post-text',
                dangerouslySetInnerHTML: { __html: mdPreview(entry.ru || entry.en || '') },
              }),
              h('div', { className: 'ws-commit-meta', key: 'meta' },
                entry.results.map((item) => (item.ok ? '\u2713 ' : '\u2715 ') + item.name).join('  ')),
            ]))),
      ]));
      const templatesModal = !templatesOpen ? null : h('div', {
        className: 'ws-modal-mask',
        onMouseDown: (event) => { if (event.target === event.currentTarget) setTemplatesOpen(false); },
      }, h('div', { className: 'ws-modal', style: { width: 'min(560px, 100%)' } }, [
        h('div', { className: 'ws-modal-top', key: 'top' }, [
          h('h2', { className: 'ws-modal-title', key: 'title' }, t('templates')),
          h('button', { key: 'close', type: 'button', className: 'ws-modal-close', onClick: () => setTemplatesOpen(false) }, '\u00d7'),
        ]),
        h('div', { className: 'ws-modal-body', key: 'body' },
          templates.length === 0
            ? h('div', { className: 'ws-post-empty' }, t('noTemplates'))
            : templates.map((template) => h('div', { key: template.id, className: 'ws-composer-row' }, [
                h('button', {
                  key: 'apply', type: 'button', className: 'ws-chip',
                  onClick: () => applyTemplate(template),
                }, t('insert') + ': ' + template.name),
                h('button', {
                  key: 'del', type: 'button', className: 'ws-chip danger',
                  onClick: () => {
                    const next = templates.filter((item) => item.id !== template.id);
                    setTemplates(next);
                    writeJSON(DEVLOG_TEMPLATES_KEY, next);
                  },
                }, '\u00d7'),
              ]))),
      ]));

      return h(React.Fragment, null, [
        h('div', { className: 'ws-commits', key: 'composer' }, [composer]),
        historyModal,
        settingsOpen ? h(DevlogSettings, {
          key: 'settings', t, channels, token, deepseek, target,
          onSave: saveSettings,
          onClose: () => setSettingsOpen(false),
        }) : null,
        templatesModal,
        tplOpen ? h('div', {
          className: 'ws-modal-mask',
          onMouseDown: (event) => { if (event.target === event.currentTarget) setTplOpen(false); },
        }, h('div', { className: 'ws-modal', style: { width: 'min(420px, 100%)' } }, [
          h('div', { className: 'ws-modal-top', key: 'top' }, [
            h('h2', { className: 'ws-modal-title', key: 'title' }, t('saveTemplate')),
            h('button', { key: 'close', type: 'button', className: 'ws-modal-close', onClick: () => setTplOpen(false) }, '\u00d7'),
          ]),
          h('div', { className: 'ws-modal-body', key: 'body' }, h('input', {
            key: 'name', type: 'text', value: tplName, placeholder: t('templateName'),
            onChange: (event) => setTplName(event.target.value),
            onKeyDown: (event) => { if (event.key === 'Enter') saveTemplate(); },
            style: { height: '30px', padding: '0 9px', borderRadius: '8px', border: '1px solid rgba(127,127,127,0.24)', background: 'transparent', color: 'inherit', font: 'inherit', fontSize: '12px' },
          })),
          h('div', { className: 'ws-modal-composer', key: 'foot' }, h('div', { className: 'ws-composer-row', key: 'row' }, [
            h('button', { key: 'save', type: 'button', className: 'ws-chip primary', onClick: saveTemplate }, t('save')),
            h('button', { key: 'cancel', type: 'button', className: 'ws-chip', onClick: () => setTplOpen(false) }, t('cancel')),
          ])),
        ])) : null,
      ]);
    }
    // ---------- доска ----------

    class TasksBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { error: '' };
      }

      static getDerivedStateFromError(error) {
        return { error: error && error.message ? error.message : String(error) };
      }

      render() {
        if (this.state.error !== '') {
          return h('div', {
            style: { padding: '24px', fontSize: '13px', lineHeight: '20px', color: '#cf222e' },
          }, 'Work Space: ' + this.state.error);
        }
        return this.props.children;
      }
    }

    function TasksPanel(props) {
      return h(TasksBoundary, null, h(TasksPage, props));
    }

    function TasksPage(props) {
      const selectWorkspaces = typeof props.useWorkspaces === 'function' ? props.useWorkspaces : () => undefined;
      const workspaces = selectWorkspaces((snapshot) => snapshot);
      const items = useMemo(() => {
        const list = workspaces && Array.isArray(workspaces.items) ? workspaces.items : [];
        return list.filter((item) => item && typeof item.workspaceId === 'string');
      }, [workspaces]);

      const [projectKey, setProjectKey] = useState(readText(PROJECT_KEY));
      const [statuses, setStatuses] = useState(() => readJSON(STATUS_KEY, {}));
      const [links, setLinks] = useState(() => readJSON(LINKS_KEY, {}));
      const [mains, setMains] = useState(() => readJSON(MAIN_KEY, {}));
      const [opened, setOpened] = useState('');
      const [dragging, setDragging] = useState('');
      const [dragOver, setDragOver] = useState('');
      const [createOpen, setCreateOpen] = useState(false);
      const [newTaskOpen, setNewTaskOpen] = useState(false);
      const [mainMenuOpen, setMainMenuOpen] = useState(false);
      const [taskMenuOpen, setTaskMenuOpen] = useState(false);
      const [tab, setTab] = useState(() => readText(TAB_KEY) || 'tasks');
      const [commitsTick, setCommitsTick] = useState(0);
      const [commitOpen, setCommitOpen] = useState(null);
      const [copiedSha, setCopiedSha] = useState('');
      const [meta, setMeta] = useState(() => readJSON(COMMITS_META_KEY, {}));
      const [search, setSearch] = useState('');
      const [authorFilter, setAuthorFilter] = useState('');
      const [branchFilter, setBranchFilter] = useState('');
      const [authorMenu, setAuthorMenu] = useState(false);
      const [branchMenu, setBranchMenu] = useState(false);
      const [codeFilter, setCodeFilter] = useState('');
      const [codeMenu, setCodeMenu] = useState(false);
      const [clearConfirm, setClearConfirm] = useState(false);
      const [restoreTarget, setRestoreTarget] = useState(null);
      const [refreshing, setRefreshing] = useState(false);
      const [importNote, setImportNote] = useState('');
      const [refreshNote, setRefreshNote] = useState('');
      const [deletedTick, setDeletedTick] = useState(0);
      const [pickerOpen, setPickerOpen] = useState(false);
      const [langOpen, setLangOpen] = useState(false);
      const [promptOpen, setPromptOpen] = useState(false);
      const [boardTick, setBoardTick] = useState(0);
      const [lang, setLang] = useState(() => readText(LANG_KEY) || 'ru');
      const [pack, setPack] = useState(() => readJSON(PACK_KEY, null));
      const pendingLink = useRef(null);
      const importInput = useRef(null);
      const commitsInput = useRef(null);

      const t = useMemo(() => makeT(lang, pack), [lang, pack]);

      const selected = useMemo(() => {
        const stored = items.find((item) => item.path === projectKey);
        return stored !== undefined ? stored : items[0];
      }, [items, projectKey]);

      const projectPath = selected === undefined ? '' : String(selected.path || '');
      const board = useMemo(() => boardFor(projectPath), [projectPath, boardTick]);
      const deleted = useMemo(() => deletedFor(projectPath), [projectPath, deletedTick]);
      const commits = useMemo(() => commitsFor(projectPath), [projectPath, commitsTick]);
      const projectMeta = meta[projectPath] || {};
      const statusList = Array.isArray(projectMeta.status) ? projectMeta.status : [];
      const codes = useMemo(() => {
        const set = new Set();
        for (const task of board) if (task.code) set.add(String(task.code));
        for (const commit of commits) {
          const match = String(commit.message || '').match(/[A-Za-zА-Яа-я]{1,10}[_-]\d+/);
          if (match !== null) set.add(match[0]);
        }
        return [...set];
      }, [commits, board]);
      const authors = useMemo(() => [...new Set(commits.map((item) => String(item.author || '')).filter((name) => name !== ''))], [commits]);
      const branches = useMemo(() => [...new Set(commits.map((item) => String(item.branch || 'main')))], [commits]);
      const filteredCommits = useMemo(() => {
        const query = search.trim().toLowerCase();
        return commits.filter((item) => {
          const text = (String(item.message || '') + ' ' + String(item.author || '') + ' ' + String(item.sha || '')).toLowerCase();
          if (query !== '' && text.indexOf(query) < 0) return false;
          if (authorFilter !== '' && String(item.author || '') !== authorFilter) return false;
          if (branchFilter !== '' && String(item.branch || 'main') !== branchFilter) return false;
          if (codeFilter !== '' && String(item.message || '').indexOf(codeFilter) < 0) return false;
          return true;
        });
      }, [commits, search, authorFilter, branchFilter, codeFilter]);
      const commitGroups = useMemo(() => {
        const groups = [];
        for (const commit of filteredCommits) {
          const label = dayLabel(new Date(commit.date || 0).getTime());
          let group = groups.find((item) => item.label === label);
          if (group === undefined) {
            group = { label, items: [] };
            groups.push(group);
          }
          group.items.push(commit);
        }
        return groups;
      }, [filteredCommits]);
      const lanes = useMemo(() => {
        const list = [];
        for (const commit of commits) {
          const branch = String(commit.branch || 'main');
          if (list.indexOf(branch) < 0) list.push(branch);
        }
        return list;
      }, [commits]);
      const projectStatuses = statuses[projectPath] || {};
      const entryOf = (task) => normalizeEntry(projectStatuses[task.id]);
      const mainSessionId = mains[projectPath] || '';

      // Главный чат мог быть создан до того, как плагин научился его запоминать:
      // если в проекте ровно один чат без задачи — это он.
      const linkedIds = useMemo(() => new Set(Object.values(links[projectPath] || {})), [links, projectPath]);
      const mainCandidates = useMemo(() => {
        const ids = selected && Array.isArray(selected.sessionIds) ? selected.sessionIds : [];
        return ids.filter((id) => !linkedIds.has(id));
      }, [selected, linkedIds]);
      const effectiveMain = mainSessionId !== '' ? mainSessionId : (mainCandidates.length === 1 ? mainCandidates[0] : '');

      useEffect(() => {
        if (mainSessionId !== '' || mainCandidates.length !== 1) return;
        const next = { ...readJSON(MAIN_KEY, {}), [projectPath]: mainCandidates[0] };
        setMains(next);
        writeJSON(MAIN_KEY, next);
      }, [mainCandidates, mainSessionId, projectPath]);

      const saveEntry = (task, patch) => {
        const next = { ...statuses, [projectPath]: { ...projectStatuses, [task.id]: { ...entryOf(task), ...patch } } };
        setStatuses(next);
        writeJSON(STATUS_KEY, next);
        if (patch.status === 'archived') chatAction('archive', chatIdOf(task));
        if (patch.status !== undefined && patch.status !== 'archived') chatAction('unarchive', chatIdOf(task));
      };

      const saveLinks = (next) => { setLinks(next); writeJSON(LINKS_KEY, next); };

      const chatIdOf = (task) => {
        const map = links[projectPath] || {};
        const sessionId = map[task.id];
        return typeof sessionId === 'string' ? sessionId : '';
      };

      const chatAction = (action, sessionId) => {
        if (sessionId === '' || typeof props.chatActions !== 'function') return;
        props.chatActions(action, sessionId);
      };

      useEffect(() => {
        const anyOpen = pickerOpen || langOpen || taskMenuOpen || mainMenuOpen || authorMenu || branchMenu || codeMenu;
        if (!anyOpen) return;
        const onDocClick = (event) => {
          const target = event.target;
          if (target && typeof target.closest === 'function' && target.closest('.ws-menu, .ws-tool')) return;
          setPickerOpen(false); setLangOpen(false); setTaskMenuOpen(false);
          setMainMenuOpen(false); setAuthorMenu(false); setBranchMenu(false); setCodeMenu(false);
        };
        document.addEventListener('click', onDocClick);
        return () => document.removeEventListener('click', onDocClick);
      }, [pickerOpen, langOpen, taskMenuOpen, mainMenuOpen, authorMenu, branchMenu, codeMenu]);

      useEffect(() => {
        const pending = pendingLink.current;
        if (pending === null) return;
        const workspace = items.find((item) => item.workspaceId === pending.workspaceId);
        if (!workspace || !Array.isArray(workspace.sessionIds)) return;
        const fresh = workspace.sessionIds.filter((id) => !pending.before.has(id));
        if (fresh.length === 0) return;
        const sessionId = fresh[fresh.length - 1];
        if (pending.kind === 'main') {
          const next = { ...readJSON(MAIN_KEY, {}), [pending.path]: sessionId };
          setMains(next);
          writeJSON(MAIN_KEY, next);
        } else {
          const currentLinks = readJSON(LINKS_KEY, {});
          saveLinks({ ...currentLinks, [pending.path]: { ...(currentLinks[pending.path] || {}), [pending.taskId]: sessionId } });
        }
        pendingLink.current = null;
      }, [items]);

      const startLink = (taskId, kind, workspace) => {
        const ws = workspace || selected;
        pendingLink.current = {
          taskId,
          kind: kind === 'main' ? 'main' : 'task',
          path: projectPath,
          workspaceId: ws ? ws.workspaceId : '',
          before: new Set(ws && Array.isArray(ws.sessionIds) ? ws.sessionIds : []),
        };
      };

      const openTask = (task) => {
        if (typeof props.openTaskChat !== 'function') return;
        props.openTaskChat(task, selected, chatIdOf(task), startLink);
      };

      const restartChat = (task) => {
        const currentLinks = readJSON(LINKS_KEY, {});
        const pathMap = { ...(currentLinks[projectPath] || {}) };
        delete pathMap[task.id];
        saveLinks({ ...currentLinks, [projectPath]: pathMap });
        if (typeof props.openTaskChat === 'function') props.openTaskChat(task, selected, '', startLink);
      };

      const createMainChat = () => {
        if (typeof props.openMainChat !== 'function' || selected === undefined) return;
        props.openMainChat(selected, () => startLink('', 'main'));
      };

      const createProjectAndChat = (path) => {
        if (path === '') { createMainChat(); return Promise.resolve(); }
        if (typeof props.createProject !== 'function') return Promise.resolve();
        return Promise.resolve(props.createProject(path)).then((workspace) => {
          if (workspace && typeof workspace.path === 'string') {
            setProjectKey(workspace.path);
            writeText(PROJECT_KEY, workspace.path);
            boardFor(workspace.path);
            setBoardTick((value) => value + 1);
            startLink('', 'main', workspace);
            if (typeof props.openMainChat === 'function') props.openMainChat(workspace, null);
          }
          return workspace;
        });
      };

      const copyRevert = (commit) => {
        const sha = String(commit && commit.sha ? commit.sha : '');
        if (sha === '' || !navigator.clipboard) return;
        navigator.clipboard.writeText('git revert ' + sha).then(() => {
          setCopiedSha(sha);
          window.setTimeout(() => setCopiedSha(''), 2500);
        }).catch(() => {});
      };

      const doRestore = (commit) => {
        const sha = String(commit && commit.sha ? commit.sha : '');
        const message = String(commit && commit.message ? commit.message : '').split('\n')[0];
        const text = [
          'Отмени коммит ' + sha + (message === '' ? '' : ' («' + message + '»)') + ' через git revert.',
          'Историю не переписывай: создай новый коммит с откатом.',
          'Сначала проверь git status и предупреди, если незакоммиченные изменения помешают.',
          'После отката обнови .kb/commits.json.',
        ].join('\n');
        if (typeof props.discussTask === 'function') props.discussTask(selected, effectiveMain, text);
      };

      const clearBoard = () => {
        saveBoard(projectPath, []);
        saveDeleted(projectPath, []);
        setBoardTick((value) => value + 1);
        setDeletedTick((value) => value + 1);
      };

      const exportData = () => {
        const payload = { v: 1, exportedAt: Date.now(), statuses, links, main: mains, board };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = 'ws-tasks.json';
        document.body.append(anchor);
        anchor.click();
        anchor.remove();
        window.setTimeout(() => URL.revokeObjectURL(url), 2000);
      };

      const applyCommitsDoc = (doc) => {
        if (!doc || !Array.isArray(doc.commits)) return;
        saveCommits(projectPath, doc.commits);
        saveCommitsMeta(projectPath, {
          branch: typeof doc.branch === 'string' ? doc.branch : 'main',
          ahead: Number(doc.ahead) || 0,
          behind: Number(doc.behind) || 0,
          dirty: doc.dirty === true,
          status: Array.isArray(doc.status) ? doc.status : [],
        });
        setMeta(readJSON(COMMITS_META_KEY, {}));
        setCommitsTick((value) => value + 1);
      };

      const manualRefresh = () => {
        if (typeof props.refreshCommits !== 'function' || projectPath === '') return;
        setRefreshing(true);
        setRefreshNote('');
        Promise.resolve(props.refreshCommits(projectPath)).then((result) => {
          setRefreshing(false);
          const doc = result && result.doc ? result.doc : null;
          if (doc) {
            applyCommitsDoc(doc);
            setRefreshNote(t('refreshed'));
          } else {
            setRefreshNote(result && result.error ? String(result.error) : t('noFile'));
          }
        }).catch(() => {
          setRefreshing(false);
          setRefreshNote(t('noFile'));
        });
      };

      // Живое обновление: читаем .kb/commits.json из папки проекта.
      useEffect(() => {
        if (tab !== 'commits' || projectPath === '' || typeof props.refreshCommits !== 'function') return undefined;
        let alive = true;
        const tick = () => {
          try {
            Promise.resolve(props.refreshCommits(projectPath)).then((result) => {
              if (!alive || !result || !result.doc) return;
              applyCommitsDoc(result.doc);
            }).catch(() => {});
          } catch (error) {
            console.warn('work-space: live refresh failed', error);
          }
        };
        tick();
        const timer = window.setInterval(tick, 5000);
        return () => { alive = false; window.clearInterval(timer); };
      }, [tab, projectPath]);

      const importData = (file) => {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const raw = String(reader.result).replace(/^\uFEFF/, '');
            const parsed = JSON.parse(raw);
            if (parsed && Array.isArray(parsed.commits)) {
              applyCommitsDoc(parsed);
              setTab('commits');
              writeText(TAB_KEY, 'commits');
              return;
            }
            if (Array.isArray(parsed)) {
              saveBoard(projectPath, parsed);
              setBoardTick((value) => value + 1);
              setTab('tasks');
              writeText(TAB_KEY, 'tasks');
              setImportNote(t('importDone') + parsed.length);
              return;
            }
            if (!parsed || typeof parsed !== 'object') return;
            if (parsed.statuses && typeof parsed.statuses === 'object') { setStatuses(parsed.statuses); writeJSON(STATUS_KEY, parsed.statuses); }
            if (parsed.links && typeof parsed.links === 'object') { setLinks(parsed.links); writeJSON(LINKS_KEY, parsed.links); }
            if (!Array.isArray(parsed.board)) { setImportNote('Файл не похож на доску задач'); return; }
            if (Array.isArray(parsed.board)) {
              saveBoard(projectPath, parsed.board);
              setBoardTick((value) => value + 1);
              setTab('tasks');
              writeText(TAB_KEY, 'tasks');
              setImportNote(t('importDone') + parsed.board.length);
            }
          } catch (error) {
            console.warn('work-space: import failed', error);
            setImportNote('Ошибка импорта: ' + (error && error.message ? error.message : String(error)));
          }
        };
        reader.readAsText(file);
      };

      const importCommits = (file) => {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const parsed = JSON.parse(String(reader.result));
            const list = Array.isArray(parsed)
              ? parsed
              : (parsed && Array.isArray(parsed.commits) ? parsed.commits : []);
            if (list.length === 0) return;
            saveCommits(projectPath, list);
            setCommitsTick((value) => value + 1);
          } catch (error) {
            console.warn('work-space: commits import failed', error);
          }
        };
        reader.readAsText(file);
      };

      const pickLanguage = (next) => {
        setLang(next);
        writeText(LANG_KEY, next);
        setLangOpen(false);
      };

      const applyPack = (dictionary) => {
        setPack(dictionary);
        writeJSON(PACK_KEY, dictionary);
        setLang('custom');
        writeText(LANG_KEY, 'custom');
      };

      const createTask = (draft) => {
        const id = 'task-' + Date.now().toString(36);
        const next = board.concat([{ id, title: draft.title, note: draft.desc, desc: draft.desc, how: draft.how }]);
        saveBoard(projectPath, next);
        setBoardTick((value) => value + 1);
      };

      const deleteTask = (task) => {
        const next = board.filter((item) => item.id !== task.id);
        saveBoard(projectPath, next);
        saveDeleted(projectPath, deletedFor(projectPath).concat([task]));
        setBoardTick((value) => value + 1);
        setDeletedTick((value) => value + 1);
      };

      const restoreTask = (task) => {
        const nextDeleted = deletedFor(projectPath).filter((item) => item.id !== task.id);
        saveDeleted(projectPath, nextDeleted);
        saveBoard(projectPath, board.concat([task]));
        setBoardTick((value) => value + 1);
        setDeletedTick((value) => value + 1);
      };

      const discussInChat = () => {
        if (typeof props.discussTask !== 'function' || selected === undefined) return;
        props.discussTask(selected, effectiveMain, [
          t('discussionPrompt'),
          '',
          'Проект: ' + workspaceLabel(selected) + ' (' + String(selected.path || '') + ').',
          'Текущие задачи: ' + (board.length === 0 ? 'пока нет' : board.map((task) => task.title).join('; ')) + '.',
          '',
          'Задай вопросы по одному, как в discovery-interview, и в конце предложи готовую задачу (название, что сделать, как делать).',
          'Затем запиши обновлённый файл .kb/tasks.json и напомни нажать Импорт на доске.',
        ].join('\n'));
      };

      const columnCards = (columnId) => (columnId === 'deleted'
        ? deleted
        : board.filter((task) => entryOf(task).status === columnId));
      const counts = { todo: 0, doing: 0, done: 0, archived: 0, deleted: deleted.length };
      for (const task of board) counts[entryOf(task).status] += 1;

      const renderCard = (task, columnId) => {
        const entry = entryOf(task);
        const chatId = chatIdOf(task);
        const column = COLUMNS.find((item) => item.id === columnId) || COLUMNS.find((item) => item.id === entry.status) || COLUMNS[0];
        const lastPost = entry.posts.length > 0 ? entry.posts[entry.posts.length - 1] : null;
        const children = [];
        const labelRow = [];
        labelRow.push(h('span', {
          className: 'ws-label', key: 'label',
          style: { background: entry.blocked ? STATUS_COLORS.blocked : column.accent },
        }, entry.blocked ? t('blocked') : t(column.id)));
        if (task.code) labelRow.push(h('span', { className: 'ws-card-code', key: 'code' }, task.code));
        children.push(h('div', { className: 'ws-labelrow', key: 'labelrow' }, labelRow));
        children.push(h('div', { className: 'ws-card-title', key: 'title' }, task.title));
        if (task.note) children.push(h('div', { className: 'ws-card-note', key: 'note' }, task.note));

        if (lastPost !== null) {
          const last = [];
          if (typeof lastPost.text === 'string' && lastPost.text !== '') last.push(h('div', { className: 'ws-card-lasttext', key: 'text' }, lastPost.text));
          if (typeof lastPost.image === 'string' && lastPost.image !== '') last.push(h('img', { className: 'ws-card-lastimg', key: 'image', src: lastPost.image, alt: '' }));
          if (last.length > 0) children.push(h('div', { className: 'ws-card-last', key: 'last' }, last));
        }

        const images = entry.posts.map((post) => (typeof post.image === 'string' ? post.image : '')).filter((src) => src !== '');
        if (images.length > 0) {
          children.push(h('div', { className: 'ws-carousel', key: 'carousel' },
            images.slice(-8).map((src, index) => h('img', { key: String(index), src, alt: '' }))));
        }

        const meta = [];
        const relatedCommits = commits.filter((commit) => task.code && String(commit.message || '').indexOf(task.code) >= 0);
        if (relatedCommits.length > 0) meta.push(h('span', { className: 'ws-meta-chip', key: 'commits' }, '\u21bb ' + relatedCommits.length));
        if (entry.posts.length > 0) meta.push(h('span', { className: 'ws-meta-chip', key: 'posts' }, entry.posts.length + ' ' + t('recordsShort')));
        if (chatId !== '') meta.push(h('span', { className: 'ws-meta-chip ok', key: 'chat' }, t('chat')));
        if (entry.linked !== '') meta.push(h('span', { className: 'ws-meta-chip', key: 'link' }, entry.linked));
        if (meta.length > 0) children.push(h('div', { className: 'ws-card-meta', key: 'meta' }, meta));
        if (relatedCommits.length > 0) {
          children.push(h('div', { className: 'ws-card-commit', key: 'lastcommit' },
            String(relatedCommits[0].message || '').split('\n')[0]));
        }

        const actions = [
          h('button', { key: 'chat', type: 'button', className: 'ws-chip', onClick: () => openTask(task) }, chatId === '' ? t('chat') : t('toChat')),
        ];
        if (chatId !== '') actions.push(h('button', { key: 'restart', type: 'button', className: 'ws-chip', title: t('newChat'), onClick: () => restartChat(task) }, '\u21ba'));
        if (columnId === 'deleted') {
          actions.push(h('button', { key: 'restore', type: 'button', className: 'ws-chip', onClick: () => restoreTask(task) }, t('undelete')));
        } else if (entry.status === 'archived') {
          actions.push(h('button', { key: 'restore', type: 'button', className: 'ws-chip', onClick: () => saveEntry(task, { status: 'todo' }) }, t('restore')));
        } else {
          actions.push(h('button', { key: 'archive', type: 'button', className: 'ws-chip', onClick: () => saveEntry(task, { status: 'archived' }) }, t('archive')));
          actions.push(h('button', {
            key: 'delete', type: 'button', className: 'ws-chip danger', title: t('delete'),
            onClick: () => deleteTask(task),
          }, '\u00d7'));
        }
        children.push(h('div', {
          className: 'ws-card-actions', key: 'actions',
          onClick: (event) => event.stopPropagation(),
        }, actions));

        return h('div', {
          key: task.id,
          className: 'ws-card ' + entry.status + (entry.blocked ? ' blocked' : ''),
          draggable: true,
          onClick: () => { if (dragging === '') setOpened(task.id); },
          onDragStart: (event) => {
            setDragging(task.id);
            event.dataTransfer.setData('text/ws-task', task.id);
            event.dataTransfer.effectAllowed = 'move';
          },
          onDragEnd: () => setDragging(''),
        }, children);
      };

      const boardView = selected === undefined
        ? h('div', { className: 'ws-col-empty' }, t('noProjects'))
        : h('div', { className: 'ws-board' }, COLUMNS.map((column) => {
            const cards = columnCards(column.id);
            const children = [
              h('div', { className: 'ws-col-head', key: 'head' }, [
                h('span', { className: 'ws-col-name', key: 'name' }, [
                  h('span', { className: 'ws-col-bar', key: 'bar', style: { background: column.accent } }),
                  h('span', { key: 'text' }, t(column.id)),
                ]),
                h('span', { className: 'ws-col-count', key: 'count' }, String(cards.length)),
              ]),
            ];
            if (cards.length === 0) children.push(h('div', { className: 'ws-col-empty', key: 'empty' }, t(column.empty)));
            for (const task of cards) children.push(renderCard(task, column.id));
            return h('div', {
              key: column.id,
              className: 'ws-col' + (dragOver === column.id ? ' over' : ''),
              onDragOver: (event) => { event.preventDefault(); setDragOver(column.id); },
              onDragLeave: () => setDragOver(''),
              onDrop: (event) => {
                event.preventDefault();
                setDragOver('');
                const id = event.dataTransfer.getData('text/ws-task') || dragging;
                const task = board.find((item) => item.id === id);
                if (task !== undefined) saveEntry(task, { status: column.id });
                setDragging('');
              },
            }, children);
          }));

      const taskForCommit = (commit) => board.find((item) => item.code && String(commit.message || '').indexOf(item.code) >= 0);

      const renderCommitCard = (commit, index) => h('div', {
        className: 'ws-commit',
        key: String(commit.sha || index),
        onClick: () => setCommitOpen(commit),
      }, [
        (() => {
          const branch = String(commit.branch || 'main');
          const laneIndex = Math.max(0, lanes.indexOf(branch));
          const lineChildren = [];
          for (let index = 0; index < lanes.length; index += 1) {
            lineChildren.push(h('span', {
              key: 'lane' + index,
              className: 'ws-lane',
              style: { left: (6 + index * 8) + 'px', background: branchColor(lanes[index]) },
            }));
          }
          lineChildren.push(h('span', {
            key: 'node',
            className: 'ws-node',
            style: { left: (6 + laneIndex * 8 - 3) + 'px', background: branchColor(branch) },
          }));
          return h('div', {
            className: 'ws-graph', key: 'graph',
            title: branch,
            style: { width: (lanes.length * 8 + 14) + 'px' },
          }, lineChildren);
        })(),
        h('span', { className: 'ws-sha', key: 'sha' }, String(commit.sha || '').slice(0, 7) || '\u2014'),
        h('div', { className: 'ws-commit-body', key: 'body' }, [
          h('div', { className: 'ws-commit-msg', key: 'msg' }, String(commit.message || '').split('\n')[0]),
          h('div', { className: 'ws-commit-meta', key: 'meta' }, [
            h('span', { key: 'author' }, String(commit.author || '\u2014')),
            h('span', { key: 'date' }, formatDate(new Date(commit.date || 0).getTime())),
            commit.branch ? h('span', { className: 'ws-branch-chip', key: 'branch' }, [
              h('span', { className: 'ws-branch-dot', key: 'dot', style: { background: branchColor(commit.branch) } }),
              h('span', { key: 'name' }, String(commit.branch)),
            ]) : null,
            Array.isArray(commit.files) ? h('span', { key: 'files' }, commit.files.length + ' ' + t('files').toLowerCase()) : null,
          ]),
        ]),
        h('div', { className: 'ws-commit-actions', key: 'actions' }, [
          taskForCommit(commit) === undefined ? null : h('button', {
            key: 'task', type: 'button', className: 'ws-chip',
            onClick: (event) => { event.stopPropagation(); setOpened(taskForCommit(commit).id); },
          }, t('viewTask')),
          h('button', {
            key: 'restore', type: 'button', className: 'ws-chip',
            onClick: (event) => { event.stopPropagation(); setRestoreTarget(commit); },
          }, t('restoreFrom')),
        ]),
      ]);

      const commitsToolbar = h('div', { className: 'ws-commit-toolbar', key: 'toolbar' }, [
        h('button', {
          key: 'refresh', type: 'button', className: 'ws-chip',
          disabled: refreshing, onClick: manualRefresh,
        }, refreshing ? t('refreshing') : t('refresh')),
        refreshNote === '' ? null : h('span', {
          key: 'note',
          style: { fontSize: '11px', color: 'var(--dsw-alias-label-tertiary, #8a8f98)' },
        }, refreshNote),
        h('input', {
          key: 'search', type: 'text', value: search, placeholder: t('search'), className: 'ws-search',
          onChange: (event) => setSearch(event.target.value),
        }),
        h('div', { className: 'ws-tool', key: 'author' }, [
          h('button', { key: 'btn', type: 'button', className: 'ws-chip', onClick: () => setAuthorMenu(!authorMenu) },
            (authorFilter === '' ? t('allAuthors') : authorFilter) + ' \u25be'),
          authorMenu ? h('div', { className: 'ws-menu', key: 'menu' }, [
            h('button', {
              key: 'all', type: 'button', className: 'ws-menu-item' + (authorFilter === '' ? ' active' : ''),
              onClick: () => { setAuthorFilter(''); setAuthorMenu(false); },
            }, t('allAuthors')),
            ...authors.map((name) => h('button', {
              key: name, type: 'button', className: 'ws-menu-item' + (authorFilter === name ? ' active' : ''),
              onClick: () => { setAuthorFilter(name); setAuthorMenu(false); },
            }, name)),
          ]) : null,
        ]),
        h('div', { className: 'ws-tool', key: 'branch' }, [
          h('button', { key: 'btn', type: 'button', className: 'ws-chip', onClick: () => setBranchMenu(!branchMenu) },
            (branchFilter === '' ? t('allBranches') : branchFilter) + ' \u25be'),
          branchMenu ? h('div', { className: 'ws-menu', key: 'menu' }, [
            h('button', {
              key: 'all', type: 'button', className: 'ws-menu-item' + (branchFilter === '' ? ' active' : ''),
              onClick: () => { setBranchFilter(''); setBranchMenu(false); },
            }, t('allBranches')),
            ...branches.map((name) => h('button', {
              key: name, type: 'button', className: 'ws-menu-item' + (branchFilter === name ? ' active' : ''),
              onClick: () => { setBranchFilter(name); setBranchMenu(false); },
            }, name)),
          ]) : null,
        ]),
        h('div', { className: 'ws-tool', key: 'code' }, [
          h('button', { key: 'btn', type: 'button', className: 'ws-chip', onClick: () => setCodeMenu(!codeMenu) },
            (codeFilter === '' ? t('allTasksFilter') : codeFilter) + ' \u25be'),
          codeMenu ? h('div', { className: 'ws-menu', key: 'menu' }, [
            h('button', {
              key: 'all', type: 'button', className: 'ws-menu-item' + (codeFilter === '' ? ' active' : ''),
              onClick: () => { setCodeFilter(''); setCodeMenu(false); },
            }, t('allTasksFilter')),
            ...codes.map((code) => h('button', {
              key: code, type: 'button', className: 'ws-menu-item' + (codeFilter === code ? ' active' : ''),
              onClick: () => { setCodeFilter(code); setCodeMenu(false); },
            }, code)),
          ]) : null,
        ]),
      ]);

      const commitsContent = h('div', { key: 'commits' }, [
        projectMeta.branch ? h('div', { className: 'ws-commit-status', key: 'status' }, [
          h('span', { className: 'ws-branch-chip', key: 'branch' }, [
            h('span', { className: 'ws-branch-dot', key: 'dot', style: { background: branchColor(projectMeta.branch) } }),
            h('span', { key: 'name' }, String(projectMeta.branch)),
          ]),
          projectMeta.ahead ? h('span', { key: 'ahead' }, '\u2191' + projectMeta.ahead) : null,
          projectMeta.behind ? h('span', { key: 'behind' }, '\u2193' + projectMeta.behind) : null,
        ]) : null,
        projectMeta.dirty
          ? h('div', { className: 'ws-dirty', key: 'dirty' }, [
              h('div', { key: 'title' }, t('dirtyBanner') + (statusList.length > 0 ? ' (' + statusList.length + ')' : '')),
              statusList.length > 0
                ? h('div', { className: 'ws-dirty-list', key: 'list' }, statusList.slice(0, 12).map((entry, index) => h('div', {
                    className: 'ws-dirty-file', key: String(index),
                  }, (entry && typeof entry === 'object' && entry.status ? String(entry.status) + ' ' : '')
                    + String(entry && typeof entry === 'object' ? entry.path || '' : entry))))
                : null,
            ])
          : null,
        commitsToolbar,
        commits.length === 0
          ? h('div', { className: 'ws-col-empty', key: 'empty' }, t('commitsEmpty'))
          : filteredCommits.length === 0
            ? h('div', { className: 'ws-col-empty', key: 'nomatch' }, '\u2014')
            : h('div', { className: 'ws-commits', key: 'list' }, commitGroups.map((group) => h('div', {
                className: 'ws-commit-group', key: group.label,
              }, [
                h('div', { className: 'ws-commit-group-label', key: 'label' },
                  group.label === 'today' ? t('today') : group.label === 'yesterday' ? t('yesterday') : group.label),
                ...group.items.map((commit, index) => renderCommitCard(commit, index)),
              ]))),
      ]);
      const root = h('div', { className: 'ws-tasks' }, [
        h('div', { className: 'ws-tasks-head', key: 'head' }, [
          h('div', { key: 'titles' }, [
            h('h1', { className: 'ws-tasks-title', key: 'title' }, t('title')),
            h('p', { className: 'ws-tasks-sub', key: 'sub' }, t('sub')),
          ]),
          h('div', { className: 'ws-tabs', key: 'tabs' }, [
            h('button', {
              key: 'tasks', type: 'button', className: 'ws-tab' + (tab === 'tasks' ? ' active' : ''),
              onClick: () => { setTab('tasks'); writeText(TAB_KEY, 'tasks'); },
            }, t('tabTasks')),
            h('button', {
              key: 'commits', type: 'button', className: 'ws-tab' + (tab === 'commits' ? ' active' : ''),
              onClick: () => { setTab('commits'); writeText(TAB_KEY, 'commits'); },
            }, t('tabCommits')),
            h('button', {
              key: 'devlog', type: 'button', className: 'ws-tab' + (tab === 'devlog' ? ' active' : ''),
              onClick: () => { setTab('devlog'); writeText(TAB_KEY, 'devlog'); },
            }, t('tabDevlog')),
          ]),
          h('div', { className: 'ws-tools', key: 'tools' }, [
            h('div', { className: 'ws-tool', key: 'picker' }, [
              h('button', {
                key: 'btn', type: 'button', className: 'ws-picker-btn', disabled: items.length === 0,
                onClick: () => setPickerOpen(!pickerOpen),
              }, [
                h('span', { key: 'label' }, t('project')),
                h('strong', { key: 'value' }, selected === undefined ? '\u2014' : workspaceLabel(selected)),
                h('span', { key: 'caret' }, '\u25be'),
              ]),
              pickerOpen ? h('div', { className: 'ws-menu', key: 'menu' }, items.map((item) =>
                h('button', {
                  key: item.workspaceId, type: 'button',
                  className: 'ws-menu-item' + (item.path === projectPath ? ' active' : ''),
                  onClick: () => { setProjectKey(item.path); writeText(PROJECT_KEY, item.path); setPickerOpen(false); },
                }, workspaceLabel(item)))) : null,
            ]),
            h('div', { className: 'ws-tool', key: 'create', style: tab === 'tasks' ? undefined : { display: 'none' } }, [
              h('button', { key: 'btn', type: 'button', className: 'ws-chip', onClick: () => setCreateOpen(true) }, t('createProject')),
            ]),
            h('div', { className: 'ws-tool', key: 'newtask', style: tab === 'tasks' ? undefined : { display: 'none' } }, [
              h('button', {
                key: 'btn', type: 'button', className: 'ws-chip primary',
                onClick: () => setTaskMenuOpen(!taskMenuOpen),
              }, '+ ' + t('addTask') + ' \u25be'),
              taskMenuOpen ? h('div', { className: 'ws-menu', key: 'menu' }, [
                h('button', {
                  key: 'manual', type: 'button', className: 'ws-menu-item',
                  onClick: () => { setTaskMenuOpen(false); setNewTaskOpen(true); },
                }, t('manualAdd')),
                h('button', {
                  key: 'discuss', type: 'button', className: 'ws-menu-item',
                  onClick: () => { setTaskMenuOpen(false); discussInChat(); },
                }, t('discussTask')),
              ]) : null,
            ]),
            h('div', { className: 'ws-tool', key: 'main', style: tab === 'tasks' ? undefined : { display: 'none' } }, [
              h('button', {
                key: 'btn', type: 'button',
                className: 'ws-chip' + (effectiveMain === '' ? ' primary' : ''),
                onClick: () => {
                  if (effectiveMain !== '' && typeof props.openSessionById === 'function') {
                    props.openSessionById(effectiveMain);
                    return;
                  }
                  if (mainCandidates.length > 1) { setMainMenuOpen(!mainMenuOpen); return; }
                  createMainChat();
                },
              }, effectiveMain !== ''
                ? t('mainChat')
                : (mainCandidates.length > 1 ? t('pickMainChat') : t('createMainChat'))),
              mainMenuOpen && mainCandidates.length > 1
                ? h('div', { className: 'ws-menu', key: 'menu' }, mainCandidates.map((id) =>
                    h('button', {
                      key: id, type: 'button', className: 'ws-menu-item',
                      onClick: () => {
                        const next = { ...readJSON(MAIN_KEY, {}), [projectPath]: id };
                        setMains(next);
                        writeJSON(MAIN_KEY, next);
                        setMainMenuOpen(false);
                        if (typeof props.openSessionById === 'function') props.openSessionById(id);
                      },
                    }, typeof props.sessionLabel === 'function' ? props.sessionLabel(id) : id.slice(0, 8))))
                : null,
            ]),

            h('div', { className: 'ws-tool', key: 'clear', style: tab === 'tasks' ? undefined : { display: 'none' } }, [
              h('button', { key: 'btn', type: 'button', className: 'ws-chip danger', onClick: () => setClearConfirm(true) }, t('clear')),
            ]),
            h('div', { className: 'ws-tool', key: 'export' }, [
              h('button', { key: 'exp', type: 'button', className: 'ws-chip', onClick: exportData }, t('export')),
              h('button', { key: 'imp', type: 'button', className: 'ws-chip', onClick: () => { if (importInput.current) importInput.current.click(); } }, t('import')),
              h('input', {
                key: 'file', type: 'file', accept: 'application/json', ref: importInput, style: { display: 'none' },
                onChange: (event) => importData(event.target.files ? event.target.files[0] : null),
              }),
            ]),
            h('div', { className: 'ws-tool', key: 'lang' }, [
              h('button', {
                key: 'btn', type: 'button', className: 'ws-icon-btn', title: t('language'),
                onClick: () => setLangOpen(!langOpen),
              }, '\u{1FA90}'),
              langOpen ? h('div', { className: 'ws-menu', key: 'menu' }, [
                h('button', { key: 'ru', type: 'button', className: 'ws-menu-item' + (lang === 'ru' ? ' active' : ''), onClick: () => pickLanguage('ru') }, 'Русский'),
                h('button', { key: 'en', type: 'button', className: 'ws-menu-item' + (lang === 'en' ? ' active' : ''), onClick: () => pickLanguage('en') }, 'English'),
                pack ? h('button', { key: 'custom', type: 'button', className: 'ws-menu-item' + (lang === 'custom' ? ' active' : ''), onClick: () => pickLanguage('custom') }, 'Custom') : null,
                h('button', { key: 'tr', type: 'button', className: 'ws-menu-item', onClick: () => { setLangOpen(false); setPromptOpen(true); } }, t('translate')),
              ]) : null,
            ]),
          ]),
        ]),
        tab === 'tasks' ? h('div', { key: 'board' }, boardView) : (tab === 'devlog' ? h('div', { key: 'devlog' }, h(DevlogPage, { t, board, statusOf: (task) => entryOf(task).status, imagesOf: (task) => { const entry = entryOf(task); return entry.posts.map((post) => (typeof post.image === 'string' ? post.image : '')).filter((src) => src !== '').slice(-6); } })) : commitsContent),
        h('div', { className: 'ws-tasks-foot', key: 'foot' }, [
          h('span', { key: 'c1' }, t('todo') + ' ' + counts.todo),
          h('span', { key: 'c2' }, t('doing') + ' ' + counts.doing),
          h('span', { key: 'c3' }, t('done') + ' ' + counts.done),
          h('span', { key: 'c4' }, t('archived') + ' ' + counts.archived),
          h('span', { key: 'c5' }, t('deleted') + ' ' + counts.deleted),
          h('span', { key: 'path' }, projectPath),
          h('span', { key: 'count' }, 'Задач: ' + board.length),
          importNote === '' ? null : h('span', { key: 'note' }, importNote),
        ]),
      ]);

      const openedTask = board.find((task) => task.id === opened);
      const layers = [root];
      if (openedTask !== undefined) {
        layers.push(h(TaskModal, {
          key: 'modal', task: openedTask, board, t, commits,
          onOpenCommit: (commit) => setCommitOpen(commit),
          entry: entryOf(openedTask),
          onPatch: (patch) => saveEntry(openedTask, patch),
          onClose: () => setOpened(''),
        }));
      }
      if (newTaskOpen) {
        layers.push(h(NewTaskModal, {
          key: 'newtask', t,
          onCreate: createTask,
          onClose: () => setNewTaskOpen(false),
        }));
      }
      if (createOpen) {
        layers.push(h(CreateProjectModal, {
          key: 'create', t, onCreate: createProjectAndChat, onPick: props.pickDirectory,
          onClose: () => setCreateOpen(false),
        }));
      }
      if (restoreTarget !== null) {
        layers.push(h(ConfirmModal, {
          key: 'restore',
          title: t('restoreTitle'),
          text: t('restoreText'),
          confirmLabel: t('restoreConfirm'),
          t,
          onConfirm: () => { doRestore(restoreTarget); setRestoreTarget(null); },
          onClose: () => setRestoreTarget(null),
        }));
      }
      if (clearConfirm) {
        layers.push(h(ConfirmModal, {
          key: 'clear',
          title: t('clearTitle'),
          text: t('clearText'),
          confirmLabel: t('clearConfirm'),
          t,
          onConfirm: () => { clearBoard(); setClearConfirm(false); },
          onClose: () => setClearConfirm(false),
        }));
      }
      if (commitOpen !== null) {
        layers.push(h(CommitModal, {
          key: 'commit', commit: commitOpen, board, t,
          onOpenTask: (task) => setOpened(task.id),
          onClose: () => setCommitOpen(null),
        }));
      }
      if (promptOpen) {
        layers.push(h(TranslateModal, {
          key: 'translate', t, onApply: applyPack,
          onClose: () => setPromptOpen(false),
        }));
      }
      return h(React.Fragment, null, layers);
    }

    function TasksIcon() {
      return h('svg', {
        viewBox: '0 0 24 24', width: 16, height: 16, fill: 'none', stroke: 'currentColor',
        strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round',
        'aria-hidden': 'true', style: { display: 'block' },
      }, [
        h('rect', { key: 'a', x: 3, y: 4, width: 5, height: 16, rx: 1 }),
        h('rect', { key: 'b', x: 10, y: 4, width: 5, height: 10, rx: 1 }),
        h('rect', { key: 'c', x: 17, y: 4, width: 4, height: 7, rx: 1 }),
      ]);
    }

    return {
      inject: ['slots', 'uiWorkspace', 'sessions', 'remote', 'remote.workspaceFiles'],
      apply(ctx) {
        ctx.effect(() => {
          const style = document.createElement('style');
          style.id = 'ws-style';
          style.textContent = CSS;
          document.head.append(style);
          return () => style.remove();
        }, 'work-space: styles');

        ctx.effect(() => {
          migrateLegacyStorage();
        }, 'work-space: storage migration');

        ctx.effect(() => {
          dropLegacyBoards();
        }, 'work-space: legacy cleanup');

        ctx.effect(() => {
          const attempts = new Map();
          const timer = window.setInterval(() => {
            const sessions = ctx.get('sessions');
            if (!sessions || !sessions.list || typeof sessions.using !== 'function') return;
            const snapshot = sessions.list.getSnapshot();
            if (!snapshot || !snapshot.byId) return;
            const links = readJSON(LINKS_KEY, {});
            for (const [path, map] of Object.entries(links)) {
              if (!map || typeof map !== 'object') continue;
              const board = boardFor(path);
              for (const [taskId, sessionId] of Object.entries(map)) {
                const task = board.find((item) => item.id === taskId);
                if (task === undefined) continue;
                const entry = snapshot.byId[sessionId];
                if (entry === undefined) continue;
                const current = typeof entry.title === 'string'
                  ? entry.title
                  : (entry.projectionValues && typeof entry.projectionValues.title === 'string') ? entry.projectionValues.title : '';
                if (current === '') continue;
                const desired = taskHeading(task);
                if (current === desired) continue;
                const tries = attempts.get(sessionId) || 0;
                if (tries >= 5) continue;
                attempts.set(sessionId, tries + 1);
                Promise.resolve(sessions.using(sessionId, { source: 'workspaceOperation' }, (reference) =>
                  reference.binding.session.rename(desired))).then((result) => {
                    if (!result || result.ok !== true) console.warn('work-space: rename rejected');
                  }).catch((error) => console.warn('work-space: rename failed', error));
              }
            }
          }, 2000);
          return () => window.clearInterval(timer);
        }, 'work-space: rename guard');

        const openTaskChat = (task, workspace, existingId, onPending) => {
          const uiWorkspace = ctx.get('uiWorkspace');
          if (!uiWorkspace) return;
          if (existingId !== '' && typeof uiWorkspace.openSession === 'function') { uiWorkspace.openSession(existingId); return; }
          if (workspace === undefined) return;
          if (typeof onPending === 'function') onPending(task.id);
          uiWorkspace.startSession(workspace.workspaceId, { prompt: buildPrompt(task, workspace), whenDraftExists: 'append' });
        };

        const openMainChat = (workspace, onPending, promptOverride) => {
          const uiWorkspace = ctx.get('uiWorkspace');
          if (!uiWorkspace || workspace === undefined) return;
          if (typeof onPending === 'function') onPending();
          uiWorkspace.startSession(workspace.workspaceId, {
            prompt: (typeof promptOverride === 'string' && promptOverride !== '') ? promptOverride : [
              'Главный чат проекта ' + workspaceLabel(workspace) + '.',
              '',
              'Сначала посмотри, что лежит в папке проекта:',
              '- если папка пустая — начни интервью: задавай вопросы по одному о цели и объёме работы;',
              '- если в папке есть файлы — изучи их, кратко перескажи, что понял, и только потом спрашивай о недостающем.',
              'Спроси, нужны ли задачам коды: предложи короткий префикс проекта или разреши коды без префикса.',
              'Когда задачи станут ясны, предложи их списком; доска Work Space принимает их через Импорт.',
            ].join('\n'),
            whenDraftExists: 'append',
          });
        };

        const sessionLabel = (sessionId) => {
          const sessions = ctx.get('sessions');
          const snapshot = sessions && sessions.list ? sessions.list.getSnapshot() : null;
          const entry = snapshot && snapshot.byId ? snapshot.byId[sessionId] : undefined;
          if (entry) {
            const title = typeof entry.title === 'string'
              ? entry.title
              : (entry.projectionValues && typeof entry.projectionValues.title === 'string' ? entry.projectionValues.title : '');
            if (title !== '') return title;
          }
          return String(sessionId).slice(0, 8);
        };

        const discussTask = (workspace, sessionId, text) => {
          if (workspace === undefined) return;
          if (sessionId === '' ) { openMainChat(workspace, null, text); return; }
          const uiWorkspace = ctx.get('uiWorkspace');
          if (uiWorkspace && typeof uiWorkspace.openSession === 'function') uiWorkspace.openSession(sessionId);
          const sessions = ctx.get('sessions');
          const conversation = ctx.get('conversation');
          const fill = () => {
            try {
              const binding = sessions && typeof sessions.binding === 'function' ? sessions.binding(sessionId) : undefined;
              if (!binding || !conversation || !conversation.input) return false;
              conversation.input.requestDraftInitialization(binding, { prompt: text, whenDraftExists: 'append' });
              return true;
            } catch (error) {
              console.warn('work-space: prefill failed', error);
              return false;
            }
          };
          if (fill()) return;
          let tries = 0;
          const timer = window.setInterval(() => {
            if (fill() || ++tries > 12) window.clearInterval(timer);
          }, 300);
        };

        const openDiscussion = (workspace, text) => {
          const uiWorkspace = ctx.get('uiWorkspace');
          if (!uiWorkspace || workspace === undefined) return;
          uiWorkspace.startSession(workspace.workspaceId, { prompt: text, whenDraftExists: 'append' });
        };

        const createProject = (path) => {
          const workspaces = ctx.get('workspaces');
          if (!workspaces || typeof workspaces.create !== 'function') return Promise.reject(new Error('workspaces service is unavailable'));
          return Promise.resolve(workspaces.create({ path })).then((workspace) => {
            if (workspace && typeof workspace.workspaceId === 'string') boardFor(workspace.path || path);
            return workspace;
          });
        };

        const openSessionById = (sessionId) => {
          const uiWorkspace = ctx.get('uiWorkspace');
          if (uiWorkspace && typeof uiWorkspace.openSession === 'function') uiWorkspace.openSession(sessionId);
        };

        let commitsApi = null;
        try {
          commitsApi = ctx.remote.workspaceFiles;
        } catch (error) {
          commitsApi = null;
        }

        const refreshCommits = (projectPath) => {
          try {
            if (typeof projectPath !== 'string' || projectPath === '') return Promise.resolve({ doc: null, error: 'no-project' });
            let api = commitsApi;
            if (!api) {
              try {
                api = ctx.remote.workspaceFiles;
                commitsApi = api;
              } catch (error) {
                api = null;
              }
            }
            if (!api || typeof api.read !== 'function') return Promise.resolve({ doc: null, error: 'no-file-api' });
            const sessions = ctx.get('sessions');
            const snapshot = sessions && sessions.list ? sessions.list.getSnapshot() : null;
            const byId = snapshot && snapshot.byId ? snapshot.byId : {};
            let sessionId = '';
            let matched = false;
            for (const id of Object.keys(byId)) {
              const entry = byId[id];
              if (entry && entry.cwd === projectPath) { sessionId = id; matched = true; break; }
            }
            if (sessionId === '') sessionId = Object.keys(byId)[0] || '';
            if (sessionId === '') return Promise.resolve({ doc: null, error: 'no-session' });
            const relative = '.workspace/commits.json';
            const absolute = projectPath.replace(/[\\/]+$/, '').replace(/\\/g, '/') + '/.workspace/commits.json';
            const paths = matched ? [relative, absolute] : [absolute, relative];
            const attempt = (index) => {
              if (index >= paths.length) return Promise.resolve({ doc: null, error: 'read-failed' });
              return Promise.resolve(api.read(sessionId, paths[index], { limit: 5000 })).then((result) => {
                if (!result || result.ok !== true) {
                  const failure = result && result.error ? result.error : null;
                  const reason = failure && failure.message ? failure.message : (failure && failure.code ? failure.code : 'remote-error');
                  if (index + 1 < paths.length) return attempt(index + 1);
                  return { doc: null, error: String(reason) };
                }
                const page = result.value || {};
                const text = typeof page.text === 'string' ? page.text : '';
                if (text === '') return { doc: null, error: 'empty-file' };
                return { doc: JSON.parse(text), error: '' };
              }).catch((error) => {
                if (index + 1 < paths.length) return attempt(index + 1);
                return { doc: null, error: error && error.message ? error.message : String(error) };
              });
            };
            return attempt(0);
          } catch (error) {
            return Promise.resolve({ doc: null, error: error && error.message ? error.message : String(error) });
          }
        };

        const pickDirectory = () => {          const uiWorkspace = ctx.get('uiWorkspace');
          if (uiWorkspace && typeof uiWorkspace.pickDirectory === 'function') {
            return Promise.resolve(uiWorkspace.pickDirectory()).catch((error) => {
              console.warn('work-space: pickDirectory failed', error);
              return null;
            });
          }
          return Promise.resolve(null);
        };

        const chatActions = (action, sessionId) => {
          const uiWorkspace = ctx.get('uiWorkspace');
          if (!uiWorkspace) return;
          if (action === 'archive' && typeof uiWorkspace.archiveSession === 'function') {
            uiWorkspace.archiveSession(sessionId).catch((error) => console.warn('work-space: archive failed', error));
          }
          if (action === 'unarchive' && typeof uiWorkspace.unarchiveSession === 'function') {
            uiWorkspace.unarchiveSession(sessionId).catch((error) => console.warn('work-space: unarchive failed', error));
          }
        };

        ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({
          name: 'sidebar.panellist', id: PANEL_ID, order: 30, label: () => 'Work Space',
        }, TasksIcon));

        ctx.slots.inject('sidebar.session.row.leading', () => ctx.slots.register({
          name: 'sidebar.session.row.leading', id: 'ws-task-dot', order: 10,
        }, SessionDot));

        ctx.slots.inject('main', function* () {
          yield ctx.slots.register({
            name: 'main', key: PANEL_ID,
            inject: () => ({ openTaskChat, chatActions, openMainChat, discussTask, createProject, openSessionById, pickDirectory, sessionLabel, refreshCommits }),
          }, TasksPanel);
        });
      },
    };
  },
});