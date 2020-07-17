// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FieldBinaryOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FieldBinaryOutlined';

export default {
  name: 'IconFieldBinaryOutlined',
  displayName: 'FieldBinaryOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FieldBinaryOutlinedSvg } },
      children,
    ),
};