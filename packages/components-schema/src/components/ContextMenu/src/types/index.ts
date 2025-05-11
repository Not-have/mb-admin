/* eslint-disable @typescript-eslint/naming-convention */
export interface ContextMenuSchema {
  disabled?: boolean;
  divided?: boolean;
  icon?: string;
  label: string;
  command?: (item: ContextMenuSchema) => void;
}
