// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CaretLeftOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CaretLeftOutlined';

export default {
  name: 'IconCaretLeftOutlined',
  displayName: 'CaretLeftOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CaretLeftOutlinedSvg } },
      children,
    ),
};