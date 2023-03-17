/* Copyright 2022 - Generated by convert_keymap_extras_header.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

export default {
  /*
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬─────┐
   * │ § │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 0 │ + │ ´ │     │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬───┤
   * │     │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │ Å │ ¨ │   │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐  │
   * │      │ A │ S │ D │ F │ G │ H │ J │ K │ L │ Ö │ Ä │ ' │  │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴──┤
   * │    │ < │ Z │ X │ C │ V │ B │ N │ M │ , │ . │ - │        │
   * ├────┴┬──┴─┬─┴───┼───┴───┴───┴───┴───┴───┼───┴─┬─┴──┬─────┤
   * │     │    │     │                       │     │    │     │
   * └─────┴────┴─────┴───────────────────────┴─────┴────┴─────┘
   */
  // Row 1
  KC_GRV: { name: '°\n§', title: 'SE_SECT' },
  KC_1: { name: '!\n1', title: 'SE_1' },
  KC_2: { name: '"\n2', title: 'SE_2' },
  KC_3: { name: '#\n3', title: 'SE_3' },
  KC_4: { name: '€\n4', title: 'SE_4' },
  KC_5: { name: '%\n5', title: 'SE_5' },
  KC_6: { name: '&\n6', title: 'SE_6' },
  KC_7: { name: '/\n7', title: 'SE_7' },
  KC_8: { name: '(\n8', title: 'SE_8' },
  KC_9: { name: ')\n9', title: 'SE_9' },
  KC_0: { name: '=\n0', title: 'SE_0' },
  KC_MINS: { name: '?\n+', title: 'SE_PLUS' },
  KC_EQL: { name: '`\n´', title: 'SE_ACUT (dead)' },
  // Row 2
  KC_Q: { name: 'Q', title: 'SE_Q' },
  KC_W: { name: 'W', title: 'SE_W' },
  KC_E: { name: 'E', title: 'SE_E' },
  KC_R: { name: 'R', title: 'SE_R' },
  KC_T: { name: 'T', title: 'SE_T' },
  KC_Y: { name: 'Y', title: 'SE_Y' },
  KC_U: { name: 'U', title: 'SE_U' },
  KC_I: { name: 'I', title: 'SE_I' },
  KC_O: { name: 'O', title: 'SE_O' },
  KC_P: { name: 'P', title: 'SE_P' },
  KC_LBRC: { name: 'Å', title: 'SE_ARNG' },
  KC_RBRC: { name: '^\n¨', title: 'SE_DIAE (dead)' },
  // Row 3
  KC_A: { name: 'A', title: 'SE_A' },
  KC_S: { name: 'S', title: 'SE_S' },
  KC_D: { name: 'D', title: 'SE_D' },
  KC_F: { name: 'F', title: 'SE_F' },
  KC_G: { name: 'G', title: 'SE_G' },
  KC_H: { name: 'H', title: 'SE_H' },
  KC_J: { name: 'J', title: 'SE_J' },
  KC_K: { name: 'K', title: 'SE_K' },
  KC_L: { name: 'L', title: 'SE_L' },
  KC_SCLN: { name: 'Ö', title: 'SE_ODIA' },
  KC_QUOT: { name: 'Ä', title: 'SE_ADIA' },
  KC_NUHS: { name: "*\n'", title: 'SE_QUOT' },
  // Row 4
  KC_NUBS: { name: '>\n<', title: 'SE_LABK' },
  KC_Z: { name: 'Z', title: 'SE_Z' },
  KC_X: { name: 'X', title: 'SE_X' },
  KC_C: { name: 'C', title: 'SE_C' },
  KC_V: { name: 'V', title: 'SE_V' },
  KC_B: { name: 'B', title: 'SE_B' },
  KC_N: { name: 'N', title: 'SE_N' },
  KC_M: { name: 'M', title: 'SE_M' },
  KC_COMM: { name: ';\n,', title: 'SE_COMM' },
  KC_DOT: { name: ':\n.', title: 'SE_DOT' },
  KC_SLSH: { name: '_\n-', title: 'SE_MINS' },

  /* Shifted symbols
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬─────┐
   * │ ° │ ! │ " │ # │ € │ % │ & │ / │ ( │ ) │ = │ ? │ ` │     │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬───┤
   * │     │   │   │   │   │   │   │   │   │   │   │   │ ^ │   │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐  │
   * │      │   │   │   │   │   │   │   │   │   │   │   │ * │  │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴──┤
   * │    │ > │   │   │   │   │   │   │   │ ; │ : │ _ │        │
   * ├────┴┬──┴─┬─┴───┼───┴───┴───┴───┴───┴───┼───┴─┬─┴──┬─────┤
   * │     │    │     │                       │     │    │     │
   * └─────┴────┴─────┴───────────────────────┴─────┴────┴─────┘
   */
  // Row 1
  'S(KC_GRV)': { name: '°', title: 'SE_DEG' },
  KC_TILD: { name: '°', title: 'SE_DEG' },
  'S(KC_1)': { name: '!', title: 'SE_EXLM' },
  KC_EXLM: { name: '!', title: 'SE_EXLM' },
  'S(KC_2)': { name: '"', title: 'SE_DQUO' },
  KC_AT: { name: '"', title: 'SE_DQUO' },
  'S(KC_3)': { name: '#', title: 'SE_HASH' },
  KC_HASH: { name: '#', title: 'SE_HASH' },
  'S(KC_4)': { name: '€', title: 'SE_EURO' },
  KC_DLR: { name: '€', title: 'SE_EURO' },
  'S(KC_5)': { name: '%', title: 'SE_PERC' },
  KC_PERC: { name: '%', title: 'SE_PERC' },
  'S(KC_6)': { name: '&', title: 'SE_AMPR' },
  KC_CIRC: { name: '&', title: 'SE_AMPR' },
  'S(KC_7)': { name: '/', title: 'SE_SLSH' },
  KC_AMPR: { name: '/', title: 'SE_SLSH' },
  'S(KC_8)': { name: '(', title: 'SE_LPRN' },
  KC_ASTR: { name: '(', title: 'SE_LPRN' },
  'S(KC_9)': { name: ')', title: 'SE_RPRN' },
  KC_LPRN: { name: ')', title: 'SE_RPRN' },
  'S(KC_0)': { name: '=', title: 'SE_EQL' },
  KC_RPRN: { name: '=', title: 'SE_EQL' },
  'S(KC_MINS)': { name: '?', title: 'SE_QUES' },
  KC_UNDS: { name: '?', title: 'SE_QUES' },
  'S(KC_EQL)': { name: '`', title: 'SE_GRV' },
  KC_PLUS: { name: '`', title: 'SE_GRV' },
  // Row 2
  'S(KC_RBRC)': { name: '^', title: 'SE_CIRC (dead)' },
  KC_RCBR: { name: '^', title: 'SE_CIRC (dead)' },
  // Row 3
  'S(KC_NUHS)': { name: '*', title: 'SE_ASTR' },
  // Row 4
  'S(KC_NUBS)': { name: '>', title: 'SE_RABK' },
  'S(KC_COMM)': { name: ';', title: 'SE_SCLN' },
  KC_LT: { name: ';', title: 'SE_SCLN' },
  'S(KC_DOT)': { name: ':', title: 'SE_COLN' },
  KC_GT: { name: ':', title: 'SE_COLN' },
  'S(KC_SLSH)': { name: '_', title: 'SE_UNDS' },
  KC_QUES: { name: '_', title: 'SE_UNDS' },

  /* Alted symbols
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬─────┐
   * │ ¶ │ © │ ™ │ £ │ $ │ ∞ │   │ | │ [ │ ] │ ≈ │ ± │   │     │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬───┤
   * │     │ • │ Ω │ É │ ® │ † │ µ │ Ü │ ı │ Œ │ π │ ˙ │ ~ │   │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐  │
   * │      │  │ ß │ ∂ │ ƒ │ ¸ │ ˛ │ √ │ ª │ ﬁ │ Ø │ Æ │ @ │  │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴──┤
   * │    │ ≤ │ ÷ │   │ Ç │ ‹ │ › │ ‘ │ ’ │ ‚ │ … │ – │        │
   * ├────┴┬──┴─┬─┴───┼───┴───┴───┴───┴───┴───┼───┴─┬─┴──┬─────┤
   * │     │    │     │                       │     │    │     │
   * └─────┴────┴─────┴───────────────────────┴─────┴────┴─────┘
   */
  // Row 1
  'A(KC_GRV)': { name: '¶', title: 'SE_PILC' },
  'A(KC_1)': { name: '©', title: 'SE_COPY' },
  'A(KC_2)': { name: '™', title: 'SE_TM' },
  'A(KC_3)': { name: '£', title: 'SE_PND' },
  'A(KC_4)': { name: '$', title: 'SE_DLR' },
  'A(KC_5)': { name: '∞', title: 'SE_INFN' },
  'A(KC_7)': { name: '|', title: 'SE_PIPE' },
  'A(KC_8)': { name: '[', title: 'SE_LBRC' },
  'A(KC_9)': { name: ']', title: 'SE_RBRC' },
  'A(KC_0)': { name: '≈', title: 'SE_AEQL' },
  'A(KC_MINS)': { name: '±', title: 'SE_PLMN' },
  // Row 2
  'A(KC_Q)': { name: '•', title: 'SE_BULT' },
  'A(KC_W)': { name: 'Ω', title: 'SE_OMEG' },
  'A(KC_E)': { name: 'É', title: 'SE_EACU' },
  'A(KC_R)': { name: '®', title: 'SE_REGD' },
  'A(KC_T)': { name: '†', title: 'SE_DAGG' },
  'A(KC_Y)': { name: 'µ', title: 'SE_MICR' },
  'A(KC_U)': { name: 'Ü', title: 'SE_UDIA' },
  'A(KC_I)': { name: 'ı', title: 'SE_DLSI' },
  'A(KC_O)': { name: 'Œ', title: 'SE_OE' },
  'A(KC_P)': { name: 'π', title: 'SE_PI' },
  'A(KC_LBRC)': { name: '˙', title: 'SE_DOTA' },
  'A(KC_RBRC)': { name: '~', title: 'SE_TILD (dead)' },
  // Row 3
  'A(KC_A)': { name: '', title: 'SE_APPL (Apple logo)' },
  'A(KC_S)': { name: 'ß', title: 'SE_SS' },
  'A(KC_D)': { name: '∂', title: 'SE_PDIF' },
  'A(KC_F)': { name: 'ƒ', title: 'SE_FHK' },
  'A(KC_G)': { name: '¸', title: 'SE_CEDL' },
  'A(KC_H)': { name: '˛', title: 'SE_OGON' },
  'A(KC_J)': { name: '√', title: 'SE_SQRT' },
  'A(KC_K)': { name: 'ª', title: 'SE_FORD' },
  'A(KC_L)': { name: 'ﬁ', title: 'SE_FI' },
  'A(KC_SCLN)': { name: 'Ø', title: 'SE_OSTR' },
  'A(KC_QUOT)': { name: 'Æ', title: 'SE_AE' },
  'A(KC_NUHS)': { name: '@', title: 'SE_AT' },
  // Row 4
  'A(KC_NUBS)': { name: '≤', title: 'SE_LTEQ' },
  'A(KC_Z)': { name: '÷', title: 'SE_DIV' },
  'A(KC_C)': { name: 'Ç', title: 'SE_CCED' },
  'A(KC_V)': { name: '‹', title: 'SE_LSAQ' },
  'A(KC_B)': { name: '›', title: 'SE_RSAQ' },
  'A(KC_N)': { name: '‘', title: 'SE_LSQU' },
  'A(KC_M)': { name: '’', title: 'SE_RSQU' },
  'A(KC_COMM)': { name: '‚', title: 'SE_SLQU' },
  'A(KC_DOT)': { name: '…', title: 'SE_ELLP' },
  'A(KC_SLSH)': { name: '–', title: 'SE_NDSH' },

  /* Shift+Alted symbols
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬─────┐
   * │   │ ¡ │ ” │ ¥ │ ¢ │ ‰ │   │ \ │ { │ } │ ≠ │ ¿ │   │     │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬───┤
   * │     │   │ ˝ │   │   │ ‡ │ ˜ │   │ ˆ │   │ ∏ │ ˚ │   │   │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐  │
   * │      │ ◊ │ ∑ │ ∆ │ ∫ │ ¯ │ ˘ │ ¬ │ º │ ﬂ │   │   │   │  │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴──┤
   * │    │ ≥ │ ⁄ │ ˇ │   │ « │ » │ “ │ ” │ „ │ · │ — │        │
   * ├────┴┬──┴─┬─┴───┼───┴───┴───┴───┴───┴───┼───┴─┬─┴──┬─────┤
   * │     │    │     │                       │     │    │     │
   * └─────┴────┴─────┴───────────────────────┴─────┴────┴─────┘
   */
  // Row 1
  'S(A(KC_1))': { name: '¡', title: 'SE_IEXL' },
  'S(A(KC_3))': { name: '¥', title: 'SE_YEN' },
  'S(A(KC_4))': { name: '¢', title: 'SE_CENT' },
  'S(A(KC_5))': { name: '‰', title: 'SE_PERM' },
  'S(A(KC_7))': { name: '\\', title: 'SE_BSLS' },
  'S(A(KC_8))': { name: '{', title: 'SE_LCBR' },
  'S(A(KC_9))': { name: '}', title: 'SE_RCBR' },
  'S(A(KC_0))': { name: '≠', title: 'SE_NEQL' },
  'S(A(KC_MINS))': { name: '¿', title: 'SE_IQUE' },
  // Row 2
  'S(A(KC_W))': { name: '˝', title: 'SE_DACU' },
  'S(A(KC_T))': { name: '‡', title: 'SE_DDAG' },
  'S(A(KC_Y))': { name: '˜', title: 'SE_STIL' },
  'S(A(KC_I))': { name: 'ˆ', title: 'SE_DCIR' },
  'S(A(KC_P))': { name: '∏', title: 'SE_NARP' },
  'S(A(KC_LBRC))': { name: '˚', title: 'SE_RNGA' },
  // Row 3
  'S(A(KC_A))': { name: '◊', title: 'SE_LOZN' },
  'S(A(KC_S))': { name: '∑', title: 'SE_NARS' },
  'S(A(KC_D))': { name: '∆', title: 'SE_INCR' },
  'S(A(KC_F))': { name: '∫', title: 'SE_INTG' },
  'S(A(KC_G))': { name: '¯', title: 'SE_MACR' },
  'S(A(KC_H))': { name: '˘', title: 'SE_BREV' },
  'S(A(KC_J))': { name: '¬', title: 'SE_NOT' },
  'S(A(KC_K))': { name: 'º', title: 'SE_MORD' },
  'S(A(KC_L))': { name: 'ﬂ', title: 'SE_FL' },
  // Row 4
  'S(A(KC_NUBS))': { name: '≥', title: 'SE_GTEQ' },
  'S(A(KC_Z))': { name: '⁄', title: 'SE_FRSL' },
  'S(A(KC_X))': { name: 'ˇ', title: 'SE_CARN' },
  'S(A(KC_V))': { name: '«', title: 'SE_LDAQ' },
  'S(A(KC_B))': { name: '»', title: 'SE_RDAQ' },
  'S(A(KC_N))': { name: '“', title: 'SE_LDQU' },
  'S(A(KC_M))': { name: '”', title: 'SE_RDQU' },
  'S(A(KC_COMM))': { name: '„', title: 'SE_DLQU' },
  'S(A(KC_DOT))': { name: '·', title: 'SE_MDDT' },
  'S(A(KC_SLSH))': { name: '—', title: 'SE_MDSH' },

  /* Other keys */
  KC_BSLS: { name: "*\n'", title: '' },
  'S(KC_BSLS)': { name: '*', title: '' },
  KC_LCBR: { name: 'Å', title: 'S(SE_ARNG) (capital Å)' },
  KC_COLN: { name: 'Ö', title: 'S(SE_ODIA) (capital Ö)' },
  KC_PIPE: { name: '*', title: 'SE_ASTR' },
  KC_DQUO: { name: 'Ä', title: 'S(SE_ADIA) (capital Ä)' },

  SC_LSPO: { name: 'LS / )', title: 'Left Shift when held, ) when tapped' },
  SC_RSPC: { name: 'RS / =', title: 'Right Shift when held, = when tapped' },
  SC_LCPO: { name: 'LC / )', title: 'Left Control when held, ) when tapped' },
  SC_RCPC: { name: 'RC / =', title: 'Right Control when held, = when tapped' },
  SC_LAPO: { name: 'LA / )', title: 'Left Alt when held, ) when tapped' },
  SC_RAPC: { name: 'RA / =', title: 'Right Alt when held, = when tapped' },

  QK_GESC: {
    name: '§/°\nEsc',
    title: 'Esc normally, but § when GUI is active or ° when Shift is active'
  }
};
