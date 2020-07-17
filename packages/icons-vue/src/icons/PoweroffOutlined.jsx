// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PoweroffOutlinedSvg from '@whalue-design/icons-svg/lib/asn/PoweroffOutlined';

export default {
  name: 'IconPoweroffOutlined',
  displayName: 'PoweroffOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PoweroffOutlinedSvg } },
      children,
    ),
};