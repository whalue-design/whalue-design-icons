// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import EuroOutlinedSvg from '@whalue-design/icons-svg/lib/asn/EuroOutlined';

export default {
  name: 'IconEuroOutlined',
  displayName: 'EuroOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: EuroOutlinedSvg } },
      children,
    ),
};