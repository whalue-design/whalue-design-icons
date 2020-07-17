// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PlusSquareOutlinedSvg from '@whalue-design/icons-svg/lib/asn/PlusSquareOutlined';

export default {
  name: 'IconPlusSquareOutlined',
  displayName: 'PlusSquareOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PlusSquareOutlinedSvg } },
      children,
    ),
};