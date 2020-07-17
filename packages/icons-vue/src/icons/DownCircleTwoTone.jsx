// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DownCircleTwoToneSvg from '@whalue-design/icons-svg/lib/asn/DownCircleTwoTone';

export default {
  name: 'IconDownCircleTwoTone',
  displayName: 'DownCircleTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DownCircleTwoToneSvg } },
      children,
    ),
};