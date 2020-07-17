// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CodeSandboxOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CodeSandboxOutlined';

export default {
  name: 'IconCodeSandboxOutlined',
  displayName: 'CodeSandboxOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CodeSandboxOutlinedSvg } },
      children,
    ),
};