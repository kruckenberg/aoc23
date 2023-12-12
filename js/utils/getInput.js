import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { inputDir } from '../../input/inputDir.js';

export function getInput(filename, splitOn = '\n') {
  const filePath = resolve(inputDir, filename);
  return readFileSync(filePath, 'utf8').trim().split(splitOn);
}
