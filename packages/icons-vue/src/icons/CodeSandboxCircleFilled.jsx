// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CodeSandboxCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/CodeSandboxCircleFilled';

export default {
  name: 'IconCodeSandboxCircleFilled',
  displayName: 'CodeSandboxCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CodeSandboxCircleFilledSvg } },
      children,
    ),
};