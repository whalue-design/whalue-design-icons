// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import TableOutlinedSvg from '@whalue-design/icons-svg/lib/asn/TableOutlined';

export default {
  name: 'IconTableOutlined',
  displayName: 'TableOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: TableOutlinedSvg } },
      children,
    ),
};