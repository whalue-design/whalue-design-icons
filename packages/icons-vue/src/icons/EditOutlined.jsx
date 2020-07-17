// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import EditOutlinedSvg from '@whalue-design/icons-svg/lib/asn/EditOutlined';

export default {
  name: 'IconEditOutlined',
  displayName: 'EditOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: EditOutlinedSvg } },
      children,
    ),
};