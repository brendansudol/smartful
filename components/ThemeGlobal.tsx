import { Global } from "@emotion/core";
import React from "react";
import { css, useThemeUI } from "theme-ui";

export function ThemeGlobal() {
  const { theme } = useThemeUI();
  const { root, ...rest } = theme.styles ?? {};
  const styles = css((rest ?? {}) as any)(theme);
  return <Global styles={styles} />;
}
