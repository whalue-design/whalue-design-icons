// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AudioTwoToneSvg from '@whalue-design/icons-svg/lib/asn/AudioTwoTone';

export default {
  name: 'IconAudioTwoTone',
  displayName: 'AudioTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AudioTwoToneSvg } },
      children,
    ),
};