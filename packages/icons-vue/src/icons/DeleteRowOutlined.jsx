// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import DeleteRowOutlinedSvg from '@whalue-design/icons-svg/lib/asn/DeleteRowOutlined';

export default {
  name: 'IconDeleteRowOutlined',
  displayName: 'DeleteRowOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DeleteRowOutlinedSvg } },
      children,
    ),
};