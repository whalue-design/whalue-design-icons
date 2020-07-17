// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CodeSandboxSquareFilledSvg from '@whalue-design/icons-svg/lib/asn/CodeSandboxSquareFilled';

export default {
  name: 'IconCodeSandboxSquareFilled',
  displayName: 'CodeSandboxSquareFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CodeSandboxSquareFilledSvg } },
      children,
    ),
};