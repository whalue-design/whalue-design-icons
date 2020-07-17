// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import VideoCameraFilledSvg from '@whalue-design/icons-svg/lib/asn/VideoCameraFilled';

export default {
  name: 'IconVideoCameraFilled',
  displayName: 'VideoCameraFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: VideoCameraFilledSvg } },
      children,
    ),
};