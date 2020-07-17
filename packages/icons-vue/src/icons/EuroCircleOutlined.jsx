// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import EuroCircleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/EuroCircleOutlined';

export default {
  name: 'IconEuroCircleOutlined',
  displayName: 'EuroCircleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: EuroCircleOutlinedSvg } },
      children,
    ),
};