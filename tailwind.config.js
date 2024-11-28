/* eslint-env node */
/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'

export const content = ['./src/**/*.{vue,js}']
export const theme = {
  extend: { colors },
}
export const plugins = []
