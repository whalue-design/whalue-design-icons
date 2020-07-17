// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PoundCircleTwoToneSvg from '@whalue-design/icons-svg/lib/asn/PoundCircleTwoTone';

export default {
  name: 'IconPoundCircleTwoTone',
  displayName: 'PoundCircleTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PoundCircleTwoToneSvg } },
      children,
    ),
};