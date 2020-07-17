// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ColumnWidthOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ColumnWidthOutlined';

export default {
  name: 'IconColumnWidthOutlined',
  displayName: 'ColumnWidthOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ColumnWidthOutlinedSvg } },
      children,
    ),
};