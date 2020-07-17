// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FieldTimeOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FieldTimeOutlined';

export default {
  name: 'IconFieldTimeOutlined',
  displayName: 'FieldTimeOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FieldTimeOutlinedSvg } },
      children,
    ),
};