// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import EditFilledSvg from '@whalue-design/icons-svg/lib/asn/EditFilled';

export default {
  name: 'IconEditFilled',
  displayName: 'EditFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: EditFilledSvg } },
      children,
    ),
};