// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import YoutubeFilledSvg from '@whalue-design/icons-svg/lib/asn/YoutubeFilled';

export default {
  name: 'IconYoutubeFilled',
  displayName: 'YoutubeFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: YoutubeFilledSvg } },
      children,
    ),
};