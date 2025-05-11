/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/naming-convention */
import type { CSSProperties } from "vue";
import {
  createTypes,
  toValidableType,
  VueTypeValidableDef,
  VueTypesInterface,
} from "vue-types";

type PropTypes = VueTypesInterface & {
  readonly style: VueTypeValidableDef<CSSProperties>;
};
const newPropTypes = createTypes({
  func: undefined,
  bool: undefined,
  string: undefined,
  number: undefined,
  object: undefined,
  integer: undefined,
}) as PropTypes;

class propTypes extends newPropTypes {
  static override get style() {
    return toValidableType("style", {
      type: [String, Object],
    });
  }
}

export { propTypes };
