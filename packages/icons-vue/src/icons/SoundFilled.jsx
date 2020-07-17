// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SoundFilledSvg from '@whalue-design/icons-svg/lib/asn/SoundFilled';

export default {
  name: 'IconSoundFilled',
  displayName: 'SoundFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SoundFilledSvg } },
      children,
    ),
};