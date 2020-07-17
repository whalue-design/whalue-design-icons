// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import InsertRowLeftOutlinedSvg from '@whalue-design/icons-svg/lib/asn/InsertRowLeftOutlined';

export default {
  name: 'IconInsertRowLeftOutlined',
  displayName: 'InsertRowLeftOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: InsertRowLeftOutlinedSvg } },
      children,
    ),
};