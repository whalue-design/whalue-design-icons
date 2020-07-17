// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RestOutlinedSvg from '@whalue-design/icons-svg/lib/asn/RestOutlined';

export default {
  name: 'IconRestOutlined',
  displayName: 'RestOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RestOutlinedSvg } },
      children,
    ),
};