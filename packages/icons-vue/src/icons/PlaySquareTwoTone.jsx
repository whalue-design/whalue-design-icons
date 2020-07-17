// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PlaySquareTwoToneSvg from '@whalue-design/icons-svg/lib/asn/PlaySquareTwoTone';

export default {
  name: 'IconPlaySquareTwoTone',
  displayName: 'PlaySquareTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PlaySquareTwoToneSvg } },
      children,
    ),
};