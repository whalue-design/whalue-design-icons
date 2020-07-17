// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AudioOutlinedSvg from '@whalue-design/icons-svg/lib/asn/AudioOutlined';

export default {
  name: 'IconAudioOutlined',
  displayName: 'AudioOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AudioOutlinedSvg } },
      children,
    ),
};