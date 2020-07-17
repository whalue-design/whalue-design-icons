// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import EuroCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/EuroCircleFilled';

export default {
  name: 'IconEuroCircleFilled',
  displayName: 'EuroCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: EuroCircleFilledSvg } },
      children,
    ),
};