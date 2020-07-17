// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AudioMutedOutlinedSvg from '@whalue-design/icons-svg/lib/asn/AudioMutedOutlined';

export default {
  name: 'IconAudioMutedOutlined',
  displayName: 'AudioMutedOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AudioMutedOutlinedSvg } },
      children,
    ),
};