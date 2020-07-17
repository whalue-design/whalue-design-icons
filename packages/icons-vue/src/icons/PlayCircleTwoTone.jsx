// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PlayCircleTwoToneSvg from '@whalue-design/icons-svg/lib/asn/PlayCircleTwoTone';

export default {
  name: 'IconPlayCircleTwoTone',
  displayName: 'PlayCircleTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PlayCircleTwoToneSvg } },
      children,
    ),
};