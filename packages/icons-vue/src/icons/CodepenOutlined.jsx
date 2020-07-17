// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CodepenOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CodepenOutlined';

export default {
  name: 'IconCodepenOutlined',
  displayName: 'CodepenOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CodepenOutlinedSvg } },
      children,
    ),
};