import { styled } from 'styled-components';

export const StyledProgressInput = styled.input<{$color: string}>`
  --progress-height: 8px;
  --progress-color: ${(props) => props.$color ?? '#b672ff'};
  --progress-bg-color: #2e2e2e;

  -webkit-appearance: none;
  cursor: pointer;
  background: transparent;
  overflow: hidden;

  &::-webkit-slider-runnable-track {
    position: relative;
    height: var(--progress-height);
    background: var(--progress-bg-color);
  };

  &::-webkit-slider-thumb {
    --thumb-height: 1px;
    --thumb-width: 1px;
    position: relative;
    -webkit-appearance: none;
    width: var(--thumb-width, var(--thumb-height));
    box-shadow: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
    100vmax var(--progress-color);
  };
`;
