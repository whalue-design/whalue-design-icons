// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DeleteColumnOutlinedSvg from '@whalue-design/icons-svg/lib/asn/DeleteColumnOutlined';

export default {
  name: 'IconDeleteColumnOutlined',
  displayName: 'DeleteColumnOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DeleteColumnOutlinedSvg } },
      children,
    ),
};