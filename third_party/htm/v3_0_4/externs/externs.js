/**
 * @fileoverview Extern definitions for HTM, based on
 *     https://github.com/developit/htm/blob/3.0.4/src/index.d.ts
 * @externs
 */

/** @const */
var htm = {};

/**
 * @param {function(HType, ?Object<string, *>, ...HChildren): !HResult} h
 * @return {function(!Array<string>, ...HValues): (!HResult | !Array<!HResult>)}
 * @template HType
 * @template HChildren
 * @template HValues
 * @template HResult
 */
htm.bind = function(h) {};

// declare const htm: {
//   bind<HResult>(
//     h: (type: any, props: Record<string, any>, ...children: any[]) => HResult
//   ): (strings: TemplateStringsArray, ...values: any[]) => HResult | HResult[];
// };
// export default htm;
