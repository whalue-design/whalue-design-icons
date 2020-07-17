// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CheckSquareOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CheckSquareOutlined';

export default {
  name: 'IconCheckSquareOutlined',
  displayName: 'CheckSquareOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CheckSquareOutlinedSvg } },
      children,
    ),
};