// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SlidersTwoToneSvg from '@whalue-design/icons-svg/lib/asn/SlidersTwoTone';

export default {
  name: 'IconSlidersTwoTone',
  displayName: 'SlidersTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SlidersTwoToneSvg } },
      children,
    ),
};