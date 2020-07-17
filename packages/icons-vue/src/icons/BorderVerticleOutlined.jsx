// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BorderVerticleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/BorderVerticleOutlined';

export default {
  name: 'IconBorderVerticleOutlined',
  displayName: 'BorderVerticleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BorderVerticleOutlinedSvg } },
      children,
    ),
};