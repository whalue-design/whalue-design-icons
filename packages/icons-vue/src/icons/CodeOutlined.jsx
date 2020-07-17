// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CodeOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CodeOutlined';

export default {
  name: 'IconCodeOutlined',
  displayName: 'CodeOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CodeOutlinedSvg } },
      children,
    ),
};