/* eslint-disable @typescript-eslint/naming-convention */
import type { RouteLocationNormalizedLoaded } from "vue-router";

import { ComponentRef } from "#/types";
import { ElDropdown } from "element-plus";

export type { ContextMenuSchema } from "./src/types";

export interface ContextMenuExpose {
  elDropdownMenuRef: ComponentRef<typeof ElDropdown>;
  tagItem: RouteLocationNormalizedLoaded;
}

export { default as ContextMenu } from "./src/ContextMenu.vue";
