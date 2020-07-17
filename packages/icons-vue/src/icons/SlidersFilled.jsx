// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SlidersFilledSvg from '@whalue-design/icons-svg/lib/asn/SlidersFilled';

export default {
  name: 'IconSlidersFilled',
  displayName: 'SlidersFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SlidersFilledSvg } },
      children,
    ),
};