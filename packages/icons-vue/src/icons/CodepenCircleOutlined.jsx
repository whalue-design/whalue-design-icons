// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CodepenCircleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CodepenCircleOutlined';

export default {
  name: 'IconCodepenCircleOutlined',
  displayName: 'CodepenCircleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CodepenCircleOutlinedSvg } },
      children,
    ),
};