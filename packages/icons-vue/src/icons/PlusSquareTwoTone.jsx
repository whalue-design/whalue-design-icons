// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PlusSquareTwoToneSvg from '@whalue-design/icons-svg/lib/asn/PlusSquareTwoTone';

export default {
  name: 'IconPlusSquareTwoTone',
  displayName: 'PlusSquareTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PlusSquareTwoToneSvg } },
      children,
    ),
};