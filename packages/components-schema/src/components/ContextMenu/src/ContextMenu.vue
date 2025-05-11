<script setup lang="ts">
import type { ContextMenuSchema } from "./types";

import { type PropType, ref, type ComponentPublicInstance } from "vue";
import type { RouteLocationNormalizedLoaded } from "vue-router";

import { ElDropdown, ElDropdownMenu, ElDropdownItem } from "element-plus";

const props = defineProps({
  schema: {
    type: Array as PropType<ContextMenuSchema[]>,
    default: () => [],
  },
  trigger: {
    type: String as PropType<"click" | "hover" | "focus" | "contextmenu">,
    default: "contextmenu",
  },
  tagItem: {
    type: Object as PropType<RouteLocationNormalizedLoaded>,
    default: () => ({}),
  },
});

const emit = defineEmits(["visibleChange"]);

const command = (item: ContextMenuSchema) => {
  item.command && item.command(item);
};

const visibleChange = (visible: boolean) => {
  emit("visibleChange", visible, props.tagItem);
};

const elDropdownMenuRef = ref<ComponentPublicInstance<
  typeof ElDropdown
> | null>(null);

defineExpose({
  elDropdownMenuRef,
  tagItem: props.tagItem,
});
</script>

<template>
  <ElDropdown
    ref="elDropdownMenuRef"
    class="context-menu"
    :trigger="trigger"
    placement="bottom-start"
    popper-class="v-context-menu-popper"
    @command="command"
    @visible-change="visibleChange"
  >
    <slot></slot>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem
          v-for="(item, index) in schema"
          :key="`dropdown${index}`"
          :divided="item.divided"
          :disabled="item.disabled"
          :command="item"
        >
          <Icon :icon="item.icon" /> {{ item.label }}
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>
