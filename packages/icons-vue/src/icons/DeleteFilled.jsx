// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DeleteFilledSvg from '@whalue-design/icons-svg/lib/asn/DeleteFilled';

export default {
  name: 'IconDeleteFilled',
  displayName: 'DeleteFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DeleteFilledSvg } },
      children,
    ),
};