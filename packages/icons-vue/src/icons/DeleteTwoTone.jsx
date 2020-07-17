// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DeleteTwoToneSvg from '@whalue-design/icons-svg/lib/asn/DeleteTwoTone';

export default {
  name: 'IconDeleteTwoTone',
  displayName: 'DeleteTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DeleteTwoToneSvg } },
      children,
    ),
};