import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Host half of the Work Space bundle.
 *
 * Besides being the bundle's host entry, it copies the bundled agent skill
 * into the user's Harness skills directory once, so a fresh install already
 * teaches the agent how to fill the board. An existing skill is never
 * overwritten: the user's edits win.
 */
export function apply(ctx) {
  try {
    const here = dirname(fileURLToPath(import.meta.url));
    const source = join(here, 'skills', 'work-space-board', 'SKILL.md');
    if (!existsSync(source)) return;
    const home = process.env.DSH_HOME && process.env.DSH_HOME !== ''
      ? process.env.DSH_HOME
      : join(homedir(), '.dsh');
    const target = join(home, 'skills', 'work-space-board', 'SKILL.md');
    if (existsSync(target)) return;
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, readFileSync(source));
    if (ctx && ctx.logger && typeof ctx.logger.info === 'function') {
      ctx.logger.info('work-space: bundled skill installed');
    }
  } catch (error) {
    console.warn('work-space: could not install the bundled skill', error);
  }
}
