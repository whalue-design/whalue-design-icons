// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import UpCircleTwoToneSvg from '@whalue-design/icons-svg/lib/asn/UpCircleTwoTone';

export default {
  name: 'IconUpCircleTwoTone',
  displayName: 'UpCircleTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UpCircleTwoToneSvg } },
      children,
    ),
};