// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import VideoCameraTwoToneSvg from '@whalue-design/icons-svg/lib/asn/VideoCameraTwoTone';

export default {
  name: 'IconVideoCameraTwoTone',
  displayName: 'VideoCameraTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: VideoCameraTwoToneSvg } },
      children,
    ),
};